# `dataGoogleDataplexDataQualityRules` Submodule <a name="`dataGoogleDataplexDataQualityRules` Submodule" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleDataplexDataQualityRules <a name="DataGoogleDataplexDataQualityRules" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/data-sources/google_dataplex_data_quality_rules google_dataplex_data_quality_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleDataplexDataQualityRules(Construct Scope, string Id, DataGoogleDataplexDataQualityRulesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig">DataGoogleDataplexDataQualityRulesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig">DataGoogleDataplexDataQualityRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleDataplexDataQualityRules resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleDataplexDataQualityRules.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleDataplexDataQualityRules.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleDataplexDataQualityRules.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleDataplexDataQualityRules.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleDataplexDataQualityRules resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleDataplexDataQualityRules to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleDataplexDataQualityRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/data-sources/google_dataplex_data_quality_rules#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleDataplexDataQualityRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList">DataGoogleDataplexDataQualityRulesRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.dataScanIdInput">DataScanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.dataScanId">DataScanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.rules"></a>

```csharp
public DataGoogleDataplexDataQualityRulesRulesList Rules { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList">DataGoogleDataplexDataQualityRulesRulesList</a>

---

##### `DataScanIdInput`<sup>Optional</sup> <a name="DataScanIdInput" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.dataScanIdInput"></a>

```csharp
public string DataScanIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `DataScanId`<sup>Required</sup> <a name="DataScanId" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.dataScanId"></a>

```csharp
public string DataScanId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleDataplexDataQualityRulesConfig <a name="DataGoogleDataplexDataQualityRulesConfig" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleDataplexDataQualityRulesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DataScanId,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.dataScanId">DataScanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/data-sources/google_dataplex_data_quality_rules#data_scan_id DataGoogleDataplexDataQualityRules#data_scan_id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/data-sources/google_dataplex_data_quality_rules#id DataGoogleDataplexDataQualityRules#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/data-sources/google_dataplex_data_quality_rules#location DataGoogleDataplexDataQualityRules#location}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/data-sources/google_dataplex_data_quality_rules#project DataGoogleDataplexDataQualityRules#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DataScanId`<sup>Required</sup> <a name="DataScanId" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.dataScanId"></a>

```csharp
public string DataScanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/data-sources/google_dataplex_data_quality_rules#data_scan_id DataGoogleDataplexDataQualityRules#data_scan_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/data-sources/google_dataplex_data_quality_rules#id DataGoogleDataplexDataQualityRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/data-sources/google_dataplex_data_quality_rules#location DataGoogleDataplexDataQualityRules#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/data-sources/google_dataplex_data_quality_rules#project DataGoogleDataplexDataQualityRules#project}.

---

### DataGoogleDataplexDataQualityRulesRules <a name="DataGoogleDataplexDataQualityRulesRules" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleDataplexDataQualityRulesRules {

};
```


### DataGoogleDataplexDataQualityRulesRulesNonNullExpectation <a name="DataGoogleDataplexDataQualityRulesRulesNonNullExpectation" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleDataplexDataQualityRulesRulesNonNullExpectation {

};
```


### DataGoogleDataplexDataQualityRulesRulesRangeExpectation <a name="DataGoogleDataplexDataQualityRulesRulesRangeExpectation" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleDataplexDataQualityRulesRulesRangeExpectation {

};
```


### DataGoogleDataplexDataQualityRulesRulesRegexExpectation <a name="DataGoogleDataplexDataQualityRulesRulesRegexExpectation" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleDataplexDataQualityRulesRulesRegexExpectation {

};
```


### DataGoogleDataplexDataQualityRulesRulesRowConditionExpectation <a name="DataGoogleDataplexDataQualityRulesRulesRowConditionExpectation" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleDataplexDataQualityRulesRulesRowConditionExpectation {

};
```


### DataGoogleDataplexDataQualityRulesRulesSetExpectation <a name="DataGoogleDataplexDataQualityRulesRulesSetExpectation" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleDataplexDataQualityRulesRulesSetExpectation {

};
```


### DataGoogleDataplexDataQualityRulesRulesSqlAssertion <a name="DataGoogleDataplexDataQualityRulesRulesSqlAssertion" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleDataplexDataQualityRulesRulesSqlAssertion {

};
```


### DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectation <a name="DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectation" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectation {

};
```


### DataGoogleDataplexDataQualityRulesRulesTableConditionExpectation <a name="DataGoogleDataplexDataQualityRulesRulesTableConditionExpectation" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleDataplexDataQualityRulesRulesTableConditionExpectation {

};
```


### DataGoogleDataplexDataQualityRulesRulesUniquenessExpectation <a name="DataGoogleDataplexDataQualityRulesRulesUniquenessExpectation" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleDataplexDataQualityRulesRulesUniquenessExpectation {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleDataplexDataQualityRulesRulesList <a name="DataGoogleDataplexDataQualityRulesRulesList" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleDataplexDataQualityRulesRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.get"></a>

```csharp
private DataGoogleDataplexDataQualityRulesRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList <a name="DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.get"></a>

```csharp
private DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference <a name="DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectation">DataGoogleDataplexDataQualityRulesRulesNonNullExpectation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.property.internalValue"></a>

```csharp
public DataGoogleDataplexDataQualityRulesRulesNonNullExpectation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectation">DataGoogleDataplexDataQualityRulesRulesNonNullExpectation</a>

---


### DataGoogleDataplexDataQualityRulesRulesOutputReference <a name="DataGoogleDataplexDataQualityRulesRulesOutputReference" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleDataplexDataQualityRulesRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.column">Column</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.dimension">Dimension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.ignoreNull">IgnoreNull</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.nonNullExpectation">NonNullExpectation</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList">DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.rangeExpectation">RangeExpectation</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList">DataGoogleDataplexDataQualityRulesRulesRangeExpectationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.regexExpectation">RegexExpectation</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList">DataGoogleDataplexDataQualityRulesRulesRegexExpectationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.rowConditionExpectation">RowConditionExpectation</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList">DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.setExpectation">SetExpectation</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList">DataGoogleDataplexDataQualityRulesRulesSetExpectationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.sqlAssertion">SqlAssertion</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList">DataGoogleDataplexDataQualityRulesRulesSqlAssertionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.statisticRangeExpectation">StatisticRangeExpectation</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList">DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.suspended">Suspended</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.tableConditionExpectation">TableConditionExpectation</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList">DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.uniquenessExpectation">UniquenessExpectation</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList">DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRules">DataGoogleDataplexDataQualityRulesRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.column"></a>

```csharp
public string Column { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.dimension"></a>

```csharp
public string Dimension { get; }
```

- *Type:* string

---

##### `IgnoreNull`<sup>Required</sup> <a name="IgnoreNull" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.ignoreNull"></a>

```csharp
public IResolvable IgnoreNull { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NonNullExpectation`<sup>Required</sup> <a name="NonNullExpectation" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.nonNullExpectation"></a>

```csharp
public DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList NonNullExpectation { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList">DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList</a>

---

##### `RangeExpectation`<sup>Required</sup> <a name="RangeExpectation" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.rangeExpectation"></a>

```csharp
public DataGoogleDataplexDataQualityRulesRulesRangeExpectationList RangeExpectation { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList">DataGoogleDataplexDataQualityRulesRulesRangeExpectationList</a>

---

##### `RegexExpectation`<sup>Required</sup> <a name="RegexExpectation" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.regexExpectation"></a>

```csharp
public DataGoogleDataplexDataQualityRulesRulesRegexExpectationList RegexExpectation { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList">DataGoogleDataplexDataQualityRulesRulesRegexExpectationList</a>

---

##### `RowConditionExpectation`<sup>Required</sup> <a name="RowConditionExpectation" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.rowConditionExpectation"></a>

```csharp
public DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList RowConditionExpectation { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList">DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList</a>

---

##### `SetExpectation`<sup>Required</sup> <a name="SetExpectation" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.setExpectation"></a>

```csharp
public DataGoogleDataplexDataQualityRulesRulesSetExpectationList SetExpectation { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList">DataGoogleDataplexDataQualityRulesRulesSetExpectationList</a>

---

##### `SqlAssertion`<sup>Required</sup> <a name="SqlAssertion" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.sqlAssertion"></a>

```csharp
public DataGoogleDataplexDataQualityRulesRulesSqlAssertionList SqlAssertion { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList">DataGoogleDataplexDataQualityRulesRulesSqlAssertionList</a>

---

##### `StatisticRangeExpectation`<sup>Required</sup> <a name="StatisticRangeExpectation" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.statisticRangeExpectation"></a>

```csharp
public DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList StatisticRangeExpectation { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList">DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList</a>

---

##### `Suspended`<sup>Required</sup> <a name="Suspended" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.suspended"></a>

```csharp
public IResolvable Suspended { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `TableConditionExpectation`<sup>Required</sup> <a name="TableConditionExpectation" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.tableConditionExpectation"></a>

```csharp
public DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList TableConditionExpectation { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList">DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList</a>

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `UniquenessExpectation`<sup>Required</sup> <a name="UniquenessExpectation" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.uniquenessExpectation"></a>

```csharp
public DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList UniquenessExpectation { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList">DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleDataplexDataQualityRulesRules InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRules">DataGoogleDataplexDataQualityRulesRules</a>

---


### DataGoogleDataplexDataQualityRulesRulesRangeExpectationList <a name="DataGoogleDataplexDataQualityRulesRulesRangeExpectationList" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleDataplexDataQualityRulesRulesRangeExpectationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.get"></a>

```csharp
private DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference <a name="DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.property.maxValue">MaxValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.property.minValue">MinValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.property.strictMaxEnabled">StrictMaxEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.property.strictMinEnabled">StrictMinEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectation">DataGoogleDataplexDataQualityRulesRulesRangeExpectation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxValue`<sup>Required</sup> <a name="MaxValue" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.property.maxValue"></a>

```csharp
public string MaxValue { get; }
```

- *Type:* string

---

##### `MinValue`<sup>Required</sup> <a name="MinValue" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.property.minValue"></a>

```csharp
public string MinValue { get; }
```

- *Type:* string

---

##### `StrictMaxEnabled`<sup>Required</sup> <a name="StrictMaxEnabled" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.property.strictMaxEnabled"></a>

```csharp
public IResolvable StrictMaxEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `StrictMinEnabled`<sup>Required</sup> <a name="StrictMinEnabled" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.property.strictMinEnabled"></a>

```csharp
public IResolvable StrictMinEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.property.internalValue"></a>

```csharp
public DataGoogleDataplexDataQualityRulesRulesRangeExpectation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectation">DataGoogleDataplexDataQualityRulesRulesRangeExpectation</a>

---


### DataGoogleDataplexDataQualityRulesRulesRegexExpectationList <a name="DataGoogleDataplexDataQualityRulesRulesRegexExpectationList" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleDataplexDataQualityRulesRulesRegexExpectationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.get"></a>

```csharp
private DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference <a name="DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.property.regex">Regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectation">DataGoogleDataplexDataQualityRulesRulesRegexExpectation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.property.regex"></a>

```csharp
public string Regex { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.property.internalValue"></a>

```csharp
public DataGoogleDataplexDataQualityRulesRulesRegexExpectation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectation">DataGoogleDataplexDataQualityRulesRulesRegexExpectation</a>

---


### DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList <a name="DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.get"></a>

```csharp
private DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference <a name="DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.property.sqlExpression">SqlExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectation">DataGoogleDataplexDataQualityRulesRulesRowConditionExpectation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SqlExpression`<sup>Required</sup> <a name="SqlExpression" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.property.sqlExpression"></a>

```csharp
public string SqlExpression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.property.internalValue"></a>

```csharp
public DataGoogleDataplexDataQualityRulesRulesRowConditionExpectation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectation">DataGoogleDataplexDataQualityRulesRulesRowConditionExpectation</a>

---


### DataGoogleDataplexDataQualityRulesRulesSetExpectationList <a name="DataGoogleDataplexDataQualityRulesRulesSetExpectationList" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleDataplexDataQualityRulesRulesSetExpectationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.get"></a>

```csharp
private DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference <a name="DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectation">DataGoogleDataplexDataQualityRulesRulesSetExpectation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.property.internalValue"></a>

```csharp
public DataGoogleDataplexDataQualityRulesRulesSetExpectation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectation">DataGoogleDataplexDataQualityRulesRulesSetExpectation</a>

---


### DataGoogleDataplexDataQualityRulesRulesSqlAssertionList <a name="DataGoogleDataplexDataQualityRulesRulesSqlAssertionList" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleDataplexDataQualityRulesRulesSqlAssertionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.get"></a>

```csharp
private DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference <a name="DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.property.sqlStatement">SqlStatement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertion">DataGoogleDataplexDataQualityRulesRulesSqlAssertion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SqlStatement`<sup>Required</sup> <a name="SqlStatement" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.property.sqlStatement"></a>

```csharp
public string SqlStatement { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.property.internalValue"></a>

```csharp
public DataGoogleDataplexDataQualityRulesRulesSqlAssertion InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertion">DataGoogleDataplexDataQualityRulesRulesSqlAssertion</a>

---


### DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList <a name="DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.get"></a>

```csharp
private DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference <a name="DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.property.maxValue">MaxValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.property.minValue">MinValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.property.statistic">Statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.property.strictMaxEnabled">StrictMaxEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.property.strictMinEnabled">StrictMinEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectation">DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxValue`<sup>Required</sup> <a name="MaxValue" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.property.maxValue"></a>

```csharp
public string MaxValue { get; }
```

- *Type:* string

---

##### `MinValue`<sup>Required</sup> <a name="MinValue" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.property.minValue"></a>

```csharp
public string MinValue { get; }
```

- *Type:* string

---

##### `Statistic`<sup>Required</sup> <a name="Statistic" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.property.statistic"></a>

```csharp
public string Statistic { get; }
```

- *Type:* string

---

##### `StrictMaxEnabled`<sup>Required</sup> <a name="StrictMaxEnabled" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.property.strictMaxEnabled"></a>

```csharp
public IResolvable StrictMaxEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `StrictMinEnabled`<sup>Required</sup> <a name="StrictMinEnabled" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.property.strictMinEnabled"></a>

```csharp
public IResolvable StrictMinEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.property.internalValue"></a>

```csharp
public DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectation">DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectation</a>

---


### DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList <a name="DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.get"></a>

```csharp
private DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference <a name="DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.property.sqlExpression">SqlExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectation">DataGoogleDataplexDataQualityRulesRulesTableConditionExpectation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SqlExpression`<sup>Required</sup> <a name="SqlExpression" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.property.sqlExpression"></a>

```csharp
public string SqlExpression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.property.internalValue"></a>

```csharp
public DataGoogleDataplexDataQualityRulesRulesTableConditionExpectation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectation">DataGoogleDataplexDataQualityRulesRulesTableConditionExpectation</a>

---


### DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList <a name="DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.get"></a>

```csharp
private DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference <a name="DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectation">DataGoogleDataplexDataQualityRulesRulesUniquenessExpectation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.property.internalValue"></a>

```csharp
public DataGoogleDataplexDataQualityRulesRulesUniquenessExpectation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectation">DataGoogleDataplexDataQualityRulesRulesUniquenessExpectation</a>

---



