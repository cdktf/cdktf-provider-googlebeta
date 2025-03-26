# `dataGoogleStorageControlProjectIntelligenceConfig` Submodule <a name="`dataGoogleStorageControlProjectIntelligenceConfig` Submodule" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleStorageControlProjectIntelligenceConfig <a name="DataGoogleStorageControlProjectIntelligenceConfig" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/data-sources/google_storage_control_project_intelligence_config google_storage_control_project_intelligence_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleStorageControlProjectIntelligenceConfig(Construct Scope, string Id, DataGoogleStorageControlProjectIntelligenceConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig">DataGoogleStorageControlProjectIntelligenceConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig">DataGoogleStorageControlProjectIntelligenceConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleStorageControlProjectIntelligenceConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleStorageControlProjectIntelligenceConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleStorageControlProjectIntelligenceConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleStorageControlProjectIntelligenceConfig.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleStorageControlProjectIntelligenceConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleStorageControlProjectIntelligenceConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleStorageControlProjectIntelligenceConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleStorageControlProjectIntelligenceConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/data-sources/google_storage_control_project_intelligence_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleStorageControlProjectIntelligenceConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.editionConfig">EditionConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.effectiveIntelligenceConfig">EffectiveIntelligenceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList">DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList">DataGoogleStorageControlProjectIntelligenceConfigFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `EditionConfig`<sup>Required</sup> <a name="EditionConfig" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.editionConfig"></a>

```csharp
public string EditionConfig { get; }
```

- *Type:* string

---

##### `EffectiveIntelligenceConfig`<sup>Required</sup> <a name="EffectiveIntelligenceConfig" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.effectiveIntelligenceConfig"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList EffectiveIntelligenceConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList">DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.filter"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceConfigFilterList Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList">DataGoogleStorageControlProjectIntelligenceConfigFilterList</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleStorageControlProjectIntelligenceConfigConfig <a name="DataGoogleStorageControlProjectIntelligenceConfigConfig" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleStorageControlProjectIntelligenceConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.name">Name</a></code> | <code>string</code> | Identifier of the GCP project. For GCP project, this field can be project name or project number. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/data-sources/google_storage_control_project_intelligence_config#id DataGoogleStorageControlProjectIntelligenceConfig#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Identifier of the GCP project. For GCP project, this field can be project name or project number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/data-sources/google_storage_control_project_intelligence_config#name DataGoogleStorageControlProjectIntelligenceConfig#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/data-sources/google_storage_control_project_intelligence_config#id DataGoogleStorageControlProjectIntelligenceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig <a name="DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig {

};
```


### DataGoogleStorageControlProjectIntelligenceConfigFilter <a name="DataGoogleStorageControlProjectIntelligenceConfigFilter" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleStorageControlProjectIntelligenceConfigFilter {

};
```


### DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets <a name="DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets {

};
```


### DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations <a name="DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations {

};
```


### DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets <a name="DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets {

};
```


### DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations <a name="DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList <a name="DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.get"></a>

```csharp
private DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference <a name="DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.effectiveEdition">EffectiveEdition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.intelligenceConfig">IntelligenceConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig">DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EffectiveEdition`<sup>Required</sup> <a name="EffectiveEdition" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.effectiveEdition"></a>

```csharp
public string EffectiveEdition { get; }
```

- *Type:* string

---

##### `IntelligenceConfig`<sup>Required</sup> <a name="IntelligenceConfig" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.intelligenceConfig"></a>

```csharp
public string IntelligenceConfig { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig">DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig</a>

---


### DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList <a name="DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.get"></a>

```csharp
private DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexes">BucketIdRegexes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets">DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketIdRegexes`<sup>Required</sup> <a name="BucketIdRegexes" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexes"></a>

```csharp
public string[] BucketIdRegexes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets">DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

---


### DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList <a name="DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.get"></a>

```csharp
private DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locations">Locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations">DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locations"></a>

```csharp
public string[] Locations { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations">DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations</a>

---


### DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList <a name="DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.get"></a>

```csharp
private DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes">BucketIdRegexes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets">DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketIdRegexes`<sup>Required</sup> <a name="BucketIdRegexes" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes"></a>

```csharp
public string[] BucketIdRegexes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets">DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

---


### DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList <a name="DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.get"></a>

```csharp
private DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locations">Locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations">DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locations"></a>

```csharp
public string[] Locations { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations">DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations</a>

---


### DataGoogleStorageControlProjectIntelligenceConfigFilterList <a name="DataGoogleStorageControlProjectIntelligenceConfigFilterList" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleStorageControlProjectIntelligenceConfigFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.get"></a>

```csharp
private DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference <a name="DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBuckets">ExcludedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList">DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocations">ExcludedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList">DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.property.includedCloudStorageBuckets">IncludedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList">DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocations">IncludedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList">DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilter">DataGoogleStorageControlProjectIntelligenceConfigFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludedCloudStorageBuckets`<sup>Required</sup> <a name="ExcludedCloudStorageBuckets" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBuckets"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList ExcludedCloudStorageBuckets { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList">DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList</a>

---

##### `ExcludedCloudStorageLocations`<sup>Required</sup> <a name="ExcludedCloudStorageLocations" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocations"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList ExcludedCloudStorageLocations { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList">DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList</a>

---

##### `IncludedCloudStorageBuckets`<sup>Required</sup> <a name="IncludedCloudStorageBuckets" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.property.includedCloudStorageBuckets"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList IncludedCloudStorageBuckets { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList">DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList</a>

---

##### `IncludedCloudStorageLocations`<sup>Required</sup> <a name="IncludedCloudStorageLocations" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocations"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList IncludedCloudStorageLocations { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList">DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceConfigFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilter">DataGoogleStorageControlProjectIntelligenceConfigFilter</a>

---



