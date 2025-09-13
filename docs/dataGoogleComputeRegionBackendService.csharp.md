# `dataGoogleComputeRegionBackendService` Submodule <a name="`dataGoogleComputeRegionBackendService` Submodule" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeRegionBackendService <a name="DataGoogleComputeRegionBackendService" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/data-sources/google_compute_region_backend_service google_compute_region_backend_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendService(Construct Scope, string Id, DataGoogleComputeRegionBackendServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig">DataGoogleComputeRegionBackendServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig">DataGoogleComputeRegionBackendServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleComputeRegionBackendService resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleComputeRegionBackendService.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleComputeRegionBackendService.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleComputeRegionBackendService.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleComputeRegionBackendService.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleComputeRegionBackendService resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleComputeRegionBackendService to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleComputeRegionBackendService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/data-sources/google_compute_region_backend_service#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeRegionBackendService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.affinityCookieTtlSec">AffinityCookieTtlSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.backend">Backend</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList">DataGoogleComputeRegionBackendServiceBackendList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.cdnPolicy">CdnPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList">DataGoogleComputeRegionBackendServiceCdnPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.circuitBreakers">CircuitBreakers</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList">DataGoogleComputeRegionBackendServiceCircuitBreakersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.connectionDrainingTimeoutSec">ConnectionDrainingTimeoutSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.connectionTrackingPolicy">ConnectionTrackingPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList">DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.consistentHash">ConsistentHash</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList">DataGoogleComputeRegionBackendServiceConsistentHashList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.customMetrics">CustomMetrics</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList">DataGoogleComputeRegionBackendServiceCustomMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.dynamicForwarding">DynamicForwarding</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList">DataGoogleComputeRegionBackendServiceDynamicForwardingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.enableCdn">EnableCdn</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.failoverPolicy">FailoverPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList">DataGoogleComputeRegionBackendServiceFailoverPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.fingerprint">Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.generatedId">GeneratedId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.haPolicy">HaPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList">DataGoogleComputeRegionBackendServiceHaPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.healthChecks">HealthChecks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.iap">Iap</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList">DataGoogleComputeRegionBackendServiceIapList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.ipAddressSelectionPolicy">IpAddressSelectionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.loadBalancingScheme">LoadBalancingScheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.localityLbPolicy">LocalityLbPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList">DataGoogleComputeRegionBackendServiceLogConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.outlierDetection">OutlierDetection</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList">DataGoogleComputeRegionBackendServiceOutlierDetectionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.portName">PortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.securityPolicy">SecurityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.sessionAffinity">SessionAffinity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.strongSessionAffinityCookie">StrongSessionAffinityCookie</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList">DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.subsetting">Subsetting</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList">DataGoogleComputeRegionBackendServiceSubsettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.timeoutSec">TimeoutSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AffinityCookieTtlSec`<sup>Required</sup> <a name="AffinityCookieTtlSec" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.affinityCookieTtlSec"></a>

```csharp
public double AffinityCookieTtlSec { get; }
```

- *Type:* double

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.backend"></a>

```csharp
public DataGoogleComputeRegionBackendServiceBackendList Backend { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList">DataGoogleComputeRegionBackendServiceBackendList</a>

---

##### `CdnPolicy`<sup>Required</sup> <a name="CdnPolicy" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.cdnPolicy"></a>

```csharp
public DataGoogleComputeRegionBackendServiceCdnPolicyList CdnPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList">DataGoogleComputeRegionBackendServiceCdnPolicyList</a>

---

##### `CircuitBreakers`<sup>Required</sup> <a name="CircuitBreakers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.circuitBreakers"></a>

```csharp
public DataGoogleComputeRegionBackendServiceCircuitBreakersList CircuitBreakers { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList">DataGoogleComputeRegionBackendServiceCircuitBreakersList</a>

---

##### `ConnectionDrainingTimeoutSec`<sup>Required</sup> <a name="ConnectionDrainingTimeoutSec" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.connectionDrainingTimeoutSec"></a>

```csharp
public double ConnectionDrainingTimeoutSec { get; }
```

- *Type:* double

---

##### `ConnectionTrackingPolicy`<sup>Required</sup> <a name="ConnectionTrackingPolicy" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.connectionTrackingPolicy"></a>

```csharp
public DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList ConnectionTrackingPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList">DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList</a>

---

##### `ConsistentHash`<sup>Required</sup> <a name="ConsistentHash" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.consistentHash"></a>

```csharp
public DataGoogleComputeRegionBackendServiceConsistentHashList ConsistentHash { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList">DataGoogleComputeRegionBackendServiceConsistentHashList</a>

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `CustomMetrics`<sup>Required</sup> <a name="CustomMetrics" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.customMetrics"></a>

```csharp
public DataGoogleComputeRegionBackendServiceCustomMetricsList CustomMetrics { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList">DataGoogleComputeRegionBackendServiceCustomMetricsList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DynamicForwarding`<sup>Required</sup> <a name="DynamicForwarding" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.dynamicForwarding"></a>

```csharp
public DataGoogleComputeRegionBackendServiceDynamicForwardingList DynamicForwarding { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList">DataGoogleComputeRegionBackendServiceDynamicForwardingList</a>

---

##### `EnableCdn`<sup>Required</sup> <a name="EnableCdn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.enableCdn"></a>

```csharp
public IResolvable EnableCdn { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `FailoverPolicy`<sup>Required</sup> <a name="FailoverPolicy" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.failoverPolicy"></a>

```csharp
public DataGoogleComputeRegionBackendServiceFailoverPolicyList FailoverPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList">DataGoogleComputeRegionBackendServiceFailoverPolicyList</a>

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.fingerprint"></a>

```csharp
public string Fingerprint { get; }
```

- *Type:* string

---

##### `GeneratedId`<sup>Required</sup> <a name="GeneratedId" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.generatedId"></a>

```csharp
public double GeneratedId { get; }
```

- *Type:* double

---

##### `HaPolicy`<sup>Required</sup> <a name="HaPolicy" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.haPolicy"></a>

```csharp
public DataGoogleComputeRegionBackendServiceHaPolicyList HaPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList">DataGoogleComputeRegionBackendServiceHaPolicyList</a>

---

##### `HealthChecks`<sup>Required</sup> <a name="HealthChecks" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.healthChecks"></a>

```csharp
public string[] HealthChecks { get; }
```

- *Type:* string[]

---

##### `Iap`<sup>Required</sup> <a name="Iap" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.iap"></a>

```csharp
public DataGoogleComputeRegionBackendServiceIapList Iap { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList">DataGoogleComputeRegionBackendServiceIapList</a>

---

##### `IpAddressSelectionPolicy`<sup>Required</sup> <a name="IpAddressSelectionPolicy" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.ipAddressSelectionPolicy"></a>

```csharp
public string IpAddressSelectionPolicy { get; }
```

- *Type:* string

---

##### `LoadBalancingScheme`<sup>Required</sup> <a name="LoadBalancingScheme" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.loadBalancingScheme"></a>

```csharp
public string LoadBalancingScheme { get; }
```

- *Type:* string

---

##### `LocalityLbPolicy`<sup>Required</sup> <a name="LocalityLbPolicy" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.localityLbPolicy"></a>

```csharp
public string LocalityLbPolicy { get; }
```

- *Type:* string

---

##### `LogConfig`<sup>Required</sup> <a name="LogConfig" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.logConfig"></a>

```csharp
public DataGoogleComputeRegionBackendServiceLogConfigList LogConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList">DataGoogleComputeRegionBackendServiceLogConfigList</a>

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `OutlierDetection`<sup>Required</sup> <a name="OutlierDetection" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.outlierDetection"></a>

```csharp
public DataGoogleComputeRegionBackendServiceOutlierDetectionList OutlierDetection { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList">DataGoogleComputeRegionBackendServiceOutlierDetectionList</a>

---

##### `PortName`<sup>Required</sup> <a name="PortName" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.portName"></a>

```csharp
public string PortName { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `SecurityPolicy`<sup>Required</sup> <a name="SecurityPolicy" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.securityPolicy"></a>

```csharp
public string SecurityPolicy { get; }
```

- *Type:* string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `SessionAffinity`<sup>Required</sup> <a name="SessionAffinity" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.sessionAffinity"></a>

```csharp
public string SessionAffinity { get; }
```

- *Type:* string

---

##### `StrongSessionAffinityCookie`<sup>Required</sup> <a name="StrongSessionAffinityCookie" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.strongSessionAffinityCookie"></a>

```csharp
public DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList StrongSessionAffinityCookie { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList">DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList</a>

---

##### `Subsetting`<sup>Required</sup> <a name="Subsetting" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.subsetting"></a>

```csharp
public DataGoogleComputeRegionBackendServiceSubsettingList Subsetting { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList">DataGoogleComputeRegionBackendServiceSubsettingList</a>

---

##### `TimeoutSec`<sup>Required</sup> <a name="TimeoutSec" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.timeoutSec"></a>

```csharp
public double TimeoutSec { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeRegionBackendServiceBackend <a name="DataGoogleComputeRegionBackendServiceBackend" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackend"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackend.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceBackend {

};
```


### DataGoogleComputeRegionBackendServiceBackendCustomMetrics <a name="DataGoogleComputeRegionBackendServiceBackendCustomMetrics" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetrics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceBackendCustomMetrics {

};
```


### DataGoogleComputeRegionBackendServiceCdnPolicy <a name="DataGoogleComputeRegionBackendServiceCdnPolicy" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceCdnPolicy {

};
```


### DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy <a name="DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy {

};
```


### DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy <a name="DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy {

};
```


### DataGoogleComputeRegionBackendServiceCircuitBreakers <a name="DataGoogleComputeRegionBackendServiceCircuitBreakers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceCircuitBreakers {

};
```


### DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout <a name="DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout {

};
```


### DataGoogleComputeRegionBackendServiceConfig <a name="DataGoogleComputeRegionBackendServiceConfig" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Id = null,
    string Project = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/data-sources/google_compute_region_backend_service#id DataGoogleComputeRegionBackendService#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/data-sources/google_compute_region_backend_service#project DataGoogleComputeRegionBackendService#project}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.region">Region</a></code> | <code>string</code> | The Region in which the created backend service should reside. If it is not provided, the provider region is used. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/data-sources/google_compute_region_backend_service#name DataGoogleComputeRegionBackendService#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/data-sources/google_compute_region_backend_service#id DataGoogleComputeRegionBackendService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/data-sources/google_compute_region_backend_service#project DataGoogleComputeRegionBackendService#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The Region in which the created backend service should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/data-sources/google_compute_region_backend_service#region DataGoogleComputeRegionBackendService#region}

---

### DataGoogleComputeRegionBackendServiceConnectionTrackingPolicy <a name="DataGoogleComputeRegionBackendServiceConnectionTrackingPolicy" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceConnectionTrackingPolicy {

};
```


### DataGoogleComputeRegionBackendServiceConsistentHash <a name="DataGoogleComputeRegionBackendServiceConsistentHash" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHash"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHash.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceConsistentHash {

};
```


### DataGoogleComputeRegionBackendServiceConsistentHashHttpCookie <a name="DataGoogleComputeRegionBackendServiceConsistentHashHttpCookie" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookie.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceConsistentHashHttpCookie {

};
```


### DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl <a name="DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl {

};
```


### DataGoogleComputeRegionBackendServiceCustomMetrics <a name="DataGoogleComputeRegionBackendServiceCustomMetrics" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetrics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceCustomMetrics {

};
```


### DataGoogleComputeRegionBackendServiceDynamicForwarding <a name="DataGoogleComputeRegionBackendServiceDynamicForwarding" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwarding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwarding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceDynamicForwarding {

};
```


### DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelection <a name="DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelection" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelection {

};
```


### DataGoogleComputeRegionBackendServiceFailoverPolicy <a name="DataGoogleComputeRegionBackendServiceFailoverPolicy" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceFailoverPolicy {

};
```


### DataGoogleComputeRegionBackendServiceHaPolicy <a name="DataGoogleComputeRegionBackendServiceHaPolicy" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceHaPolicy {

};
```


### DataGoogleComputeRegionBackendServiceHaPolicyLeader <a name="DataGoogleComputeRegionBackendServiceHaPolicyLeader" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceHaPolicyLeader {

};
```


### DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpoint <a name="DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpoint" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpoint {

};
```


### DataGoogleComputeRegionBackendServiceIap <a name="DataGoogleComputeRegionBackendServiceIap" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIap.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceIap {

};
```


### DataGoogleComputeRegionBackendServiceLogConfig <a name="DataGoogleComputeRegionBackendServiceLogConfig" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceLogConfig {

};
```


### DataGoogleComputeRegionBackendServiceOutlierDetection <a name="DataGoogleComputeRegionBackendServiceOutlierDetection" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceOutlierDetection {

};
```


### DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime <a name="DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime {

};
```


### DataGoogleComputeRegionBackendServiceOutlierDetectionInterval <a name="DataGoogleComputeRegionBackendServiceOutlierDetectionInterval" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionInterval"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionInterval.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceOutlierDetectionInterval {

};
```


### DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookie <a name="DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookie" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookie.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookie {

};
```


### DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl <a name="DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl {

};
```


### DataGoogleComputeRegionBackendServiceSubsetting <a name="DataGoogleComputeRegionBackendServiceSubsetting" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsetting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceSubsetting {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeRegionBackendServiceBackendCustomMetricsList <a name="DataGoogleComputeRegionBackendServiceBackendCustomMetricsList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceBackendCustomMetricsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.get"></a>

```csharp
private DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference <a name="DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.dryRun">DryRun</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.maxUtilization">MaxUtilization</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetrics">DataGoogleComputeRegionBackendServiceBackendCustomMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DryRun`<sup>Required</sup> <a name="DryRun" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.dryRun"></a>

```csharp
public IResolvable DryRun { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MaxUtilization`<sup>Required</sup> <a name="MaxUtilization" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.maxUtilization"></a>

```csharp
public double MaxUtilization { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionBackendServiceBackendCustomMetrics InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetrics">DataGoogleComputeRegionBackendServiceBackendCustomMetrics</a>

---


### DataGoogleComputeRegionBackendServiceBackendList <a name="DataGoogleComputeRegionBackendServiceBackendList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceBackendList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.get"></a>

```csharp
private DataGoogleComputeRegionBackendServiceBackendOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionBackendServiceBackendOutputReference <a name="DataGoogleComputeRegionBackendServiceBackendOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceBackendOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.balancingMode">BalancingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.capacityScaler">CapacityScaler</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.customMetrics">CustomMetrics</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList">DataGoogleComputeRegionBackendServiceBackendCustomMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.failover">Failover</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.group">Group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnections">MaxConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerEndpoint">MaxConnectionsPerEndpoint</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerInstance">MaxConnectionsPerInstance</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxRate">MaxRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxRatePerEndpoint">MaxRatePerEndpoint</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxRatePerInstance">MaxRatePerInstance</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxUtilization">MaxUtilization</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackend">DataGoogleComputeRegionBackendServiceBackend</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BalancingMode`<sup>Required</sup> <a name="BalancingMode" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.balancingMode"></a>

```csharp
public string BalancingMode { get; }
```

- *Type:* string

---

##### `CapacityScaler`<sup>Required</sup> <a name="CapacityScaler" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.capacityScaler"></a>

```csharp
public double CapacityScaler { get; }
```

- *Type:* double

---

##### `CustomMetrics`<sup>Required</sup> <a name="CustomMetrics" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.customMetrics"></a>

```csharp
public DataGoogleComputeRegionBackendServiceBackendCustomMetricsList CustomMetrics { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList">DataGoogleComputeRegionBackendServiceBackendCustomMetricsList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Failover`<sup>Required</sup> <a name="Failover" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.failover"></a>

```csharp
public IResolvable Failover { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.group"></a>

```csharp
public string Group { get; }
```

- *Type:* string

---

##### `MaxConnections`<sup>Required</sup> <a name="MaxConnections" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnections"></a>

```csharp
public double MaxConnections { get; }
```

- *Type:* double

---

##### `MaxConnectionsPerEndpoint`<sup>Required</sup> <a name="MaxConnectionsPerEndpoint" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerEndpoint"></a>

```csharp
public double MaxConnectionsPerEndpoint { get; }
```

- *Type:* double

---

##### `MaxConnectionsPerInstance`<sup>Required</sup> <a name="MaxConnectionsPerInstance" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerInstance"></a>

```csharp
public double MaxConnectionsPerInstance { get; }
```

- *Type:* double

---

##### `MaxRate`<sup>Required</sup> <a name="MaxRate" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxRate"></a>

```csharp
public double MaxRate { get; }
```

- *Type:* double

---

##### `MaxRatePerEndpoint`<sup>Required</sup> <a name="MaxRatePerEndpoint" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxRatePerEndpoint"></a>

```csharp
public double MaxRatePerEndpoint { get; }
```

- *Type:* double

---

##### `MaxRatePerInstance`<sup>Required</sup> <a name="MaxRatePerInstance" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxRatePerInstance"></a>

```csharp
public double MaxRatePerInstance { get; }
```

- *Type:* double

---

##### `MaxUtilization`<sup>Required</sup> <a name="MaxUtilization" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxUtilization"></a>

```csharp
public double MaxUtilization { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionBackendServiceBackend InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackend">DataGoogleComputeRegionBackendServiceBackend</a>

---


### DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList <a name="DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.get"></a>

```csharp
private DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference <a name="DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHost">IncludeHost</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookies">IncludeNamedCookies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocol">IncludeProtocol</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryString">IncludeQueryString</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklist">QueryStringBlacklist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelist">QueryStringWhitelist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy">DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludeHost`<sup>Required</sup> <a name="IncludeHost" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHost"></a>

```csharp
public IResolvable IncludeHost { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IncludeNamedCookies`<sup>Required</sup> <a name="IncludeNamedCookies" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookies"></a>

```csharp
public string[] IncludeNamedCookies { get; }
```

- *Type:* string[]

---

##### `IncludeProtocol`<sup>Required</sup> <a name="IncludeProtocol" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocol"></a>

```csharp
public IResolvable IncludeProtocol { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IncludeQueryString`<sup>Required</sup> <a name="IncludeQueryString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryString"></a>

```csharp
public IResolvable IncludeQueryString { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `QueryStringBlacklist`<sup>Required</sup> <a name="QueryStringBlacklist" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklist"></a>

```csharp
public string[] QueryStringBlacklist { get; }
```

- *Type:* string[]

---

##### `QueryStringWhitelist`<sup>Required</sup> <a name="QueryStringWhitelist" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelist"></a>

```csharp
public string[] QueryStringWhitelist { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy">DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy</a>

---


### DataGoogleComputeRegionBackendServiceCdnPolicyList <a name="DataGoogleComputeRegionBackendServiceCdnPolicyList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceCdnPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.get"></a>

```csharp
private DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList <a name="DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.get"></a>

```csharp
private DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference <a name="DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy">DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy">DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy</a>

---


### DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference <a name="DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicy">CacheKeyPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList">DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheMode">CacheMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.clientTtl">ClientTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.defaultTtl">DefaultTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.maxTtl">MaxTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCaching">NegativeCaching</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicy">NegativeCachingPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList">DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.serveWhileStale">ServeWhileStale</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSec">SignedUrlCacheMaxAgeSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicy">DataGoogleComputeRegionBackendServiceCdnPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CacheKeyPolicy`<sup>Required</sup> <a name="CacheKeyPolicy" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicy"></a>

```csharp
public DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList CacheKeyPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList">DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList</a>

---

##### `CacheMode`<sup>Required</sup> <a name="CacheMode" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheMode"></a>

```csharp
public string CacheMode { get; }
```

- *Type:* string

---

##### `ClientTtl`<sup>Required</sup> <a name="ClientTtl" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.clientTtl"></a>

```csharp
public double ClientTtl { get; }
```

- *Type:* double

---

##### `DefaultTtl`<sup>Required</sup> <a name="DefaultTtl" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.defaultTtl"></a>

```csharp
public double DefaultTtl { get; }
```

- *Type:* double

---

##### `MaxTtl`<sup>Required</sup> <a name="MaxTtl" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.maxTtl"></a>

```csharp
public double MaxTtl { get; }
```

- *Type:* double

---

##### `NegativeCaching`<sup>Required</sup> <a name="NegativeCaching" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCaching"></a>

```csharp
public IResolvable NegativeCaching { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `NegativeCachingPolicy`<sup>Required</sup> <a name="NegativeCachingPolicy" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicy"></a>

```csharp
public DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList NegativeCachingPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList">DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList</a>

---

##### `ServeWhileStale`<sup>Required</sup> <a name="ServeWhileStale" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.serveWhileStale"></a>

```csharp
public double ServeWhileStale { get; }
```

- *Type:* double

---

##### `SignedUrlCacheMaxAgeSec`<sup>Required</sup> <a name="SignedUrlCacheMaxAgeSec" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSec"></a>

```csharp
public double SignedUrlCacheMaxAgeSec { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionBackendServiceCdnPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicy">DataGoogleComputeRegionBackendServiceCdnPolicy</a>

---


### DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList <a name="DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.get"></a>

```csharp
private DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference <a name="DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.seconds">Seconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout">DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.seconds"></a>

```csharp
public double Seconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout">DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout</a>

---


### DataGoogleComputeRegionBackendServiceCircuitBreakersList <a name="DataGoogleComputeRegionBackendServiceCircuitBreakersList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceCircuitBreakersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.get"></a>

```csharp
private DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference <a name="DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.connectTimeout">ConnectTimeout</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList">DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxConnections">MaxConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxPendingRequests">MaxPendingRequests</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequests">MaxRequests</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnection">MaxRequestsPerConnection</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRetries">MaxRetries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakers">DataGoogleComputeRegionBackendServiceCircuitBreakers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectTimeout`<sup>Required</sup> <a name="ConnectTimeout" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.connectTimeout"></a>

```csharp
public DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList ConnectTimeout { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList">DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList</a>

---

##### `MaxConnections`<sup>Required</sup> <a name="MaxConnections" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxConnections"></a>

```csharp
public double MaxConnections { get; }
```

- *Type:* double

---

##### `MaxPendingRequests`<sup>Required</sup> <a name="MaxPendingRequests" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxPendingRequests"></a>

```csharp
public double MaxPendingRequests { get; }
```

- *Type:* double

---

##### `MaxRequests`<sup>Required</sup> <a name="MaxRequests" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequests"></a>

```csharp
public double MaxRequests { get; }
```

- *Type:* double

---

##### `MaxRequestsPerConnection`<sup>Required</sup> <a name="MaxRequestsPerConnection" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnection"></a>

```csharp
public double MaxRequestsPerConnection { get; }
```

- *Type:* double

---

##### `MaxRetries`<sup>Required</sup> <a name="MaxRetries" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRetries"></a>

```csharp
public double MaxRetries { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionBackendServiceCircuitBreakers InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakers">DataGoogleComputeRegionBackendServiceCircuitBreakers</a>

---


### DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList <a name="DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.get"></a>

```csharp
private DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference <a name="DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.connectionPersistenceOnUnhealthyBackends">ConnectionPersistenceOnUnhealthyBackends</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.enableStrongAffinity">EnableStrongAffinity</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.idleTimeoutSec">IdleTimeoutSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.trackingMode">TrackingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicy">DataGoogleComputeRegionBackendServiceConnectionTrackingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionPersistenceOnUnhealthyBackends`<sup>Required</sup> <a name="ConnectionPersistenceOnUnhealthyBackends" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.connectionPersistenceOnUnhealthyBackends"></a>

```csharp
public string ConnectionPersistenceOnUnhealthyBackends { get; }
```

- *Type:* string

---

##### `EnableStrongAffinity`<sup>Required</sup> <a name="EnableStrongAffinity" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.enableStrongAffinity"></a>

```csharp
public IResolvable EnableStrongAffinity { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IdleTimeoutSec`<sup>Required</sup> <a name="IdleTimeoutSec" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.idleTimeoutSec"></a>

```csharp
public double IdleTimeoutSec { get; }
```

- *Type:* double

---

##### `TrackingMode`<sup>Required</sup> <a name="TrackingMode" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.trackingMode"></a>

```csharp
public string TrackingMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionBackendServiceConnectionTrackingPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicy">DataGoogleComputeRegionBackendServiceConnectionTrackingPolicy</a>

---


### DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList <a name="DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.get"></a>

```csharp
private DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference <a name="DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.ttl">Ttl</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList">DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookie">DataGoogleComputeRegionBackendServiceConsistentHashHttpCookie</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.ttl"></a>

```csharp
public DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList Ttl { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList">DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionBackendServiceConsistentHashHttpCookie InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookie">DataGoogleComputeRegionBackendServiceConsistentHashHttpCookie</a>

---


### DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList <a name="DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.get"></a>

```csharp
private DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference <a name="DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.seconds">Seconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl">DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.seconds"></a>

```csharp
public double Seconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl">DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl</a>

---


### DataGoogleComputeRegionBackendServiceConsistentHashList <a name="DataGoogleComputeRegionBackendServiceConsistentHashList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceConsistentHashList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.get"></a>

```csharp
private DataGoogleComputeRegionBackendServiceConsistentHashOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionBackendServiceConsistentHashOutputReference <a name="DataGoogleComputeRegionBackendServiceConsistentHashOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceConsistentHashOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.property.httpCookie">HttpCookie</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList">DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.property.httpHeaderName">HttpHeaderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.property.minimumRingSize">MinimumRingSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHash">DataGoogleComputeRegionBackendServiceConsistentHash</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpCookie`<sup>Required</sup> <a name="HttpCookie" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.property.httpCookie"></a>

```csharp
public DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList HttpCookie { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList">DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList</a>

---

##### `HttpHeaderName`<sup>Required</sup> <a name="HttpHeaderName" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.property.httpHeaderName"></a>

```csharp
public string HttpHeaderName { get; }
```

- *Type:* string

---

##### `MinimumRingSize`<sup>Required</sup> <a name="MinimumRingSize" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.property.minimumRingSize"></a>

```csharp
public double MinimumRingSize { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionBackendServiceConsistentHash InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHash">DataGoogleComputeRegionBackendServiceConsistentHash</a>

---


### DataGoogleComputeRegionBackendServiceCustomMetricsList <a name="DataGoogleComputeRegionBackendServiceCustomMetricsList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceCustomMetricsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.get"></a>

```csharp
private DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference <a name="DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.dryRun">DryRun</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetrics">DataGoogleComputeRegionBackendServiceCustomMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DryRun`<sup>Required</sup> <a name="DryRun" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.dryRun"></a>

```csharp
public IResolvable DryRun { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionBackendServiceCustomMetrics InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetrics">DataGoogleComputeRegionBackendServiceCustomMetrics</a>

---


### DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList <a name="DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.get"></a>

```csharp
private DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference <a name="DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelection">DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelection InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelection">DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelection</a>

---


### DataGoogleComputeRegionBackendServiceDynamicForwardingList <a name="DataGoogleComputeRegionBackendServiceDynamicForwardingList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceDynamicForwardingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.get"></a>

```csharp
private DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference <a name="DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.property.ipPortSelection">IpPortSelection</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList">DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwarding">DataGoogleComputeRegionBackendServiceDynamicForwarding</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpPortSelection`<sup>Required</sup> <a name="IpPortSelection" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.property.ipPortSelection"></a>

```csharp
public DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList IpPortSelection { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList">DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionBackendServiceDynamicForwarding InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwarding">DataGoogleComputeRegionBackendServiceDynamicForwarding</a>

---


### DataGoogleComputeRegionBackendServiceFailoverPolicyList <a name="DataGoogleComputeRegionBackendServiceFailoverPolicyList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceFailoverPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.get"></a>

```csharp
private DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference <a name="DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.disableConnectionDrainOnFailover">DisableConnectionDrainOnFailover</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.dropTrafficIfUnhealthy">DropTrafficIfUnhealthy</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.failoverRatio">FailoverRatio</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicy">DataGoogleComputeRegionBackendServiceFailoverPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisableConnectionDrainOnFailover`<sup>Required</sup> <a name="DisableConnectionDrainOnFailover" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.disableConnectionDrainOnFailover"></a>

```csharp
public IResolvable DisableConnectionDrainOnFailover { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DropTrafficIfUnhealthy`<sup>Required</sup> <a name="DropTrafficIfUnhealthy" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.dropTrafficIfUnhealthy"></a>

```csharp
public IResolvable DropTrafficIfUnhealthy { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `FailoverRatio`<sup>Required</sup> <a name="FailoverRatio" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.failoverRatio"></a>

```csharp
public double FailoverRatio { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionBackendServiceFailoverPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicy">DataGoogleComputeRegionBackendServiceFailoverPolicy</a>

---


### DataGoogleComputeRegionBackendServiceHaPolicyLeaderList <a name="DataGoogleComputeRegionBackendServiceHaPolicyLeaderList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceHaPolicyLeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.get"></a>

```csharp
private DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList <a name="DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.get"></a>

```csharp
private DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference <a name="DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.property.instance">Instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpoint">DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.property.instance"></a>

```csharp
public string Instance { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpoint">DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpoint</a>

---


### DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference <a name="DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.property.backendGroup">BackendGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.property.networkEndpoint">NetworkEndpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList">DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeader">DataGoogleComputeRegionBackendServiceHaPolicyLeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackendGroup`<sup>Required</sup> <a name="BackendGroup" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.property.backendGroup"></a>

```csharp
public string BackendGroup { get; }
```

- *Type:* string

---

##### `NetworkEndpoint`<sup>Required</sup> <a name="NetworkEndpoint" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.property.networkEndpoint"></a>

```csharp
public DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList NetworkEndpoint { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList">DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionBackendServiceHaPolicyLeader InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeader">DataGoogleComputeRegionBackendServiceHaPolicyLeader</a>

---


### DataGoogleComputeRegionBackendServiceHaPolicyList <a name="DataGoogleComputeRegionBackendServiceHaPolicyList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceHaPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.get"></a>

```csharp
private DataGoogleComputeRegionBackendServiceHaPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionBackendServiceHaPolicyOutputReference <a name="DataGoogleComputeRegionBackendServiceHaPolicyOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceHaPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.property.fastIpMove">FastIpMove</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.property.leader">Leader</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList">DataGoogleComputeRegionBackendServiceHaPolicyLeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicy">DataGoogleComputeRegionBackendServiceHaPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FastIpMove`<sup>Required</sup> <a name="FastIpMove" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.property.fastIpMove"></a>

```csharp
public string FastIpMove { get; }
```

- *Type:* string

---

##### `Leader`<sup>Required</sup> <a name="Leader" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.property.leader"></a>

```csharp
public DataGoogleComputeRegionBackendServiceHaPolicyLeaderList Leader { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList">DataGoogleComputeRegionBackendServiceHaPolicyLeaderList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionBackendServiceHaPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicy">DataGoogleComputeRegionBackendServiceHaPolicy</a>

---


### DataGoogleComputeRegionBackendServiceIapList <a name="DataGoogleComputeRegionBackendServiceIapList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceIapList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.get"></a>

```csharp
private DataGoogleComputeRegionBackendServiceIapOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionBackendServiceIapOutputReference <a name="DataGoogleComputeRegionBackendServiceIapOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceIapOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientId">Oauth2ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientSecret">Oauth2ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientSecretSha256">Oauth2ClientSecretSha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIap">DataGoogleComputeRegionBackendServiceIap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Oauth2ClientId`<sup>Required</sup> <a name="Oauth2ClientId" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientId"></a>

```csharp
public string Oauth2ClientId { get; }
```

- *Type:* string

---

##### `Oauth2ClientSecret`<sup>Required</sup> <a name="Oauth2ClientSecret" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientSecret"></a>

```csharp
public string Oauth2ClientSecret { get; }
```

- *Type:* string

---

##### `Oauth2ClientSecretSha256`<sup>Required</sup> <a name="Oauth2ClientSecretSha256" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientSecretSha256"></a>

```csharp
public string Oauth2ClientSecretSha256 { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionBackendServiceIap InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIap">DataGoogleComputeRegionBackendServiceIap</a>

---


### DataGoogleComputeRegionBackendServiceLogConfigList <a name="DataGoogleComputeRegionBackendServiceLogConfigList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceLogConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.get"></a>

```csharp
private DataGoogleComputeRegionBackendServiceLogConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionBackendServiceLogConfigOutputReference <a name="DataGoogleComputeRegionBackendServiceLogConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceLogConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.property.enable">Enable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.property.optionalFields">OptionalFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.property.optionalMode">OptionalMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.property.sampleRate">SampleRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfig">DataGoogleComputeRegionBackendServiceLogConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.property.enable"></a>

```csharp
public IResolvable Enable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `OptionalFields`<sup>Required</sup> <a name="OptionalFields" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.property.optionalFields"></a>

```csharp
public string[] OptionalFields { get; }
```

- *Type:* string[]

---

##### `OptionalMode`<sup>Required</sup> <a name="OptionalMode" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.property.optionalMode"></a>

```csharp
public string OptionalMode { get; }
```

- *Type:* string

---

##### `SampleRate`<sup>Required</sup> <a name="SampleRate" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.property.sampleRate"></a>

```csharp
public double SampleRate { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionBackendServiceLogConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfig">DataGoogleComputeRegionBackendServiceLogConfig</a>

---


### DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList <a name="DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.get"></a>

```csharp
private DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference <a name="DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.seconds">Seconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime">DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.seconds"></a>

```csharp
public double Seconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime">DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime</a>

---


### DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList <a name="DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.get"></a>

```csharp
private DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference <a name="DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.seconds">Seconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionInterval">DataGoogleComputeRegionBackendServiceOutlierDetectionInterval</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.seconds"></a>

```csharp
public double Seconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionBackendServiceOutlierDetectionInterval InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionInterval">DataGoogleComputeRegionBackendServiceOutlierDetectionInterval</a>

---


### DataGoogleComputeRegionBackendServiceOutlierDetectionList <a name="DataGoogleComputeRegionBackendServiceOutlierDetectionList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceOutlierDetectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.get"></a>

```csharp
private DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference <a name="DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.baseEjectionTime">BaseEjectionTime</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList">DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveErrors">ConsecutiveErrors</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailure">ConsecutiveGatewayFailure</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrors">EnforcingConsecutiveErrors</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailure">EnforcingConsecutiveGatewayFailure</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRate">EnforcingSuccessRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.interval">Interval</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList">DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercent">MaxEjectionPercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHosts">SuccessRateMinimumHosts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolume">SuccessRateRequestVolume</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactor">SuccessRateStdevFactor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetection">DataGoogleComputeRegionBackendServiceOutlierDetection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaseEjectionTime`<sup>Required</sup> <a name="BaseEjectionTime" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.baseEjectionTime"></a>

```csharp
public DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList BaseEjectionTime { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList">DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList</a>

---

##### `ConsecutiveErrors`<sup>Required</sup> <a name="ConsecutiveErrors" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveErrors"></a>

```csharp
public double ConsecutiveErrors { get; }
```

- *Type:* double

---

##### `ConsecutiveGatewayFailure`<sup>Required</sup> <a name="ConsecutiveGatewayFailure" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailure"></a>

```csharp
public double ConsecutiveGatewayFailure { get; }
```

- *Type:* double

---

##### `EnforcingConsecutiveErrors`<sup>Required</sup> <a name="EnforcingConsecutiveErrors" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrors"></a>

```csharp
public double EnforcingConsecutiveErrors { get; }
```

- *Type:* double

---

##### `EnforcingConsecutiveGatewayFailure`<sup>Required</sup> <a name="EnforcingConsecutiveGatewayFailure" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailure"></a>

```csharp
public double EnforcingConsecutiveGatewayFailure { get; }
```

- *Type:* double

---

##### `EnforcingSuccessRate`<sup>Required</sup> <a name="EnforcingSuccessRate" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRate"></a>

```csharp
public double EnforcingSuccessRate { get; }
```

- *Type:* double

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.interval"></a>

```csharp
public DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList Interval { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList">DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList</a>

---

##### `MaxEjectionPercent`<sup>Required</sup> <a name="MaxEjectionPercent" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercent"></a>

```csharp
public double MaxEjectionPercent { get; }
```

- *Type:* double

---

##### `SuccessRateMinimumHosts`<sup>Required</sup> <a name="SuccessRateMinimumHosts" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHosts"></a>

```csharp
public double SuccessRateMinimumHosts { get; }
```

- *Type:* double

---

##### `SuccessRateRequestVolume`<sup>Required</sup> <a name="SuccessRateRequestVolume" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolume"></a>

```csharp
public double SuccessRateRequestVolume { get; }
```

- *Type:* double

---

##### `SuccessRateStdevFactor`<sup>Required</sup> <a name="SuccessRateStdevFactor" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactor"></a>

```csharp
public double SuccessRateStdevFactor { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionBackendServiceOutlierDetection InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetection">DataGoogleComputeRegionBackendServiceOutlierDetection</a>

---


### DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList <a name="DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.get"></a>

```csharp
private DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference <a name="DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.ttl">Ttl</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList">DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookie">DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookie</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.ttl"></a>

```csharp
public DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList Ttl { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList">DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookie InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookie">DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookie</a>

---


### DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList <a name="DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.get"></a>

```csharp
private DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference <a name="DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.seconds">Seconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl">DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.seconds"></a>

```csharp
public double Seconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl">DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl</a>

---


### DataGoogleComputeRegionBackendServiceSubsettingList <a name="DataGoogleComputeRegionBackendServiceSubsettingList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceSubsettingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.get"></a>

```csharp
private DataGoogleComputeRegionBackendServiceSubsettingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionBackendServiceSubsettingOutputReference <a name="DataGoogleComputeRegionBackendServiceSubsettingOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionBackendServiceSubsettingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.property.policy">Policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.property.subsetSize">SubsetSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsetting">DataGoogleComputeRegionBackendServiceSubsetting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

##### `SubsetSize`<sup>Required</sup> <a name="SubsetSize" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.property.subsetSize"></a>

```csharp
public double SubsetSize { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionBackendServiceSubsetting InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsetting">DataGoogleComputeRegionBackendServiceSubsetting</a>

---



