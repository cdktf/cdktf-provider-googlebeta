# `dataGoogleCloudAssetResourcesSearchAll` Submodule <a name="`dataGoogleCloudAssetResourcesSearchAll` Submodule" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudAssetResourcesSearchAll <a name="DataGoogleCloudAssetResourcesSearchAll" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/data-sources/google_cloud_asset_resources_search_all google_cloud_asset_resources_search_all}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudAssetResourcesSearchAll(Construct Scope, string Id, DataGoogleCloudAssetResourcesSearchAllConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig">DataGoogleCloudAssetResourcesSearchAllConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig">DataGoogleCloudAssetResourcesSearchAllConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.resetAssetTypes">ResetAssetTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.resetQuery">ResetQuery</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAssetTypes` <a name="ResetAssetTypes" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.resetAssetTypes"></a>

```csharp
private void ResetAssetTypes()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetQuery` <a name="ResetQuery" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.resetQuery"></a>

```csharp
private void ResetQuery()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleCloudAssetResourcesSearchAll resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleCloudAssetResourcesSearchAll.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleCloudAssetResourcesSearchAll.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleCloudAssetResourcesSearchAll.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleCloudAssetResourcesSearchAll.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleCloudAssetResourcesSearchAll resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleCloudAssetResourcesSearchAll to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleCloudAssetResourcesSearchAll that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/data-sources/google_cloud_asset_resources_search_all#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudAssetResourcesSearchAll to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.results">Results</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList">DataGoogleCloudAssetResourcesSearchAllResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.assetTypesInput">AssetTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.assetTypes">AssetTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.scope">Scope</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Results`<sup>Required</sup> <a name="Results" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.results"></a>

```csharp
public DataGoogleCloudAssetResourcesSearchAllResultsList Results { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList">DataGoogleCloudAssetResourcesSearchAllResultsList</a>

---

##### `AssetTypesInput`<sup>Optional</sup> <a name="AssetTypesInput" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.assetTypesInput"></a>

```csharp
public string[] AssetTypesInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `AssetTypes`<sup>Required</sup> <a name="AssetTypes" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.assetTypes"></a>

```csharp
public string[] AssetTypes { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAll.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudAssetResourcesSearchAllConfig <a name="DataGoogleCloudAssetResourcesSearchAllConfig" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudAssetResourcesSearchAllConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Scope,
    string[] AssetTypes = null,
    string Id = null,
    string Query = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.scope">Scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/data-sources/google_cloud_asset_resources_search_all#scope DataGoogleCloudAssetResourcesSearchAll#scope}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.assetTypes">AssetTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/data-sources/google_cloud_asset_resources_search_all#asset_types DataGoogleCloudAssetResourcesSearchAll#asset_types}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/data-sources/google_cloud_asset_resources_search_all#id DataGoogleCloudAssetResourcesSearchAll#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.query">Query</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/data-sources/google_cloud_asset_resources_search_all#query DataGoogleCloudAssetResourcesSearchAll#query}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/data-sources/google_cloud_asset_resources_search_all#scope DataGoogleCloudAssetResourcesSearchAll#scope}.

---

##### `AssetTypes`<sup>Optional</sup> <a name="AssetTypes" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.assetTypes"></a>

```csharp
public string[] AssetTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/data-sources/google_cloud_asset_resources_search_all#asset_types DataGoogleCloudAssetResourcesSearchAll#asset_types}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/data-sources/google_cloud_asset_resources_search_all#id DataGoogleCloudAssetResourcesSearchAll#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllConfig.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/data-sources/google_cloud_asset_resources_search_all#query DataGoogleCloudAssetResourcesSearchAll#query}.

---

### DataGoogleCloudAssetResourcesSearchAllResults <a name="DataGoogleCloudAssetResourcesSearchAllResults" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResults.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudAssetResourcesSearchAllResults {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudAssetResourcesSearchAllResultsList <a name="DataGoogleCloudAssetResourcesSearchAllResultsList" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudAssetResourcesSearchAllResultsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.get"></a>

```csharp
private DataGoogleCloudAssetResourcesSearchAllResultsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudAssetResourcesSearchAllResultsOutputReference <a name="DataGoogleCloudAssetResourcesSearchAllResultsOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudAssetResourcesSearchAllResultsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.additionalAttributes">AdditionalAttributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.assetType">AssetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.labels">Labels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.networkTags">NetworkTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResults">DataGoogleCloudAssetResourcesSearchAllResults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalAttributes`<sup>Required</sup> <a name="AdditionalAttributes" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.additionalAttributes"></a>

```csharp
public string[] AdditionalAttributes { get; }
```

- *Type:* string[]

---

##### `AssetType`<sup>Required</sup> <a name="AssetType" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.assetType"></a>

```csharp
public string AssetType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.labels"></a>

```csharp
public StringMap Labels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkTags`<sup>Required</sup> <a name="NetworkTags" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.networkTags"></a>

```csharp
public string[] NetworkTags { get; }
```

- *Type:* string[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResultsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudAssetResourcesSearchAllResults InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudAssetResourcesSearchAll.DataGoogleCloudAssetResourcesSearchAllResults">DataGoogleCloudAssetResourcesSearchAllResults</a>

---



