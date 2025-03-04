# `dataGoogleComputeRegionNetworkEndpointGroup` Submodule <a name="`dataGoogleComputeRegionNetworkEndpointGroup` Submodule" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeRegionNetworkEndpointGroup <a name="DataGoogleComputeRegionNetworkEndpointGroup" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_compute_region_network_endpoint_group google_compute_region_network_endpoint_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionNetworkEndpointGroup(Construct Scope, string Id, DataGoogleComputeRegionNetworkEndpointGroupConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig">DataGoogleComputeRegionNetworkEndpointGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig">DataGoogleComputeRegionNetworkEndpointGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.resetSelfLink">ResetSelfLink</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSelfLink` <a name="ResetSelfLink" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.resetSelfLink"></a>

```csharp
private void ResetSelfLink()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleComputeRegionNetworkEndpointGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleComputeRegionNetworkEndpointGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleComputeRegionNetworkEndpointGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleComputeRegionNetworkEndpointGroup.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleComputeRegionNetworkEndpointGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleComputeRegionNetworkEndpointGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleComputeRegionNetworkEndpointGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleComputeRegionNetworkEndpointGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_compute_region_network_endpoint_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeRegionNetworkEndpointGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.appEngine">AppEngine</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList">DataGoogleComputeRegionNetworkEndpointGroupAppEngineList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.cloudFunction">CloudFunction</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList">DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.cloudRun">CloudRun</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList">DataGoogleComputeRegionNetworkEndpointGroupCloudRunList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.networkEndpointType">NetworkEndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.pscData">PscData</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataList">DataGoogleComputeRegionNetworkEndpointGroupPscDataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.pscTargetService">PscTargetService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.serverlessDeployment">ServerlessDeployment</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentList">DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.subnetwork">Subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.selfLinkInput">SelfLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AppEngine`<sup>Required</sup> <a name="AppEngine" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.appEngine"></a>

```csharp
public DataGoogleComputeRegionNetworkEndpointGroupAppEngineList AppEngine { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList">DataGoogleComputeRegionNetworkEndpointGroupAppEngineList</a>

---

##### `CloudFunction`<sup>Required</sup> <a name="CloudFunction" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.cloudFunction"></a>

```csharp
public DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList CloudFunction { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList">DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList</a>

---

##### `CloudRun`<sup>Required</sup> <a name="CloudRun" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.cloudRun"></a>

```csharp
public DataGoogleComputeRegionNetworkEndpointGroupCloudRunList CloudRun { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList">DataGoogleComputeRegionNetworkEndpointGroupCloudRunList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `NetworkEndpointType`<sup>Required</sup> <a name="NetworkEndpointType" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.networkEndpointType"></a>

```csharp
public string NetworkEndpointType { get; }
```

- *Type:* string

---

##### `PscData`<sup>Required</sup> <a name="PscData" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.pscData"></a>

```csharp
public DataGoogleComputeRegionNetworkEndpointGroupPscDataList PscData { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataList">DataGoogleComputeRegionNetworkEndpointGroupPscDataList</a>

---

##### `PscTargetService`<sup>Required</sup> <a name="PscTargetService" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.pscTargetService"></a>

```csharp
public string PscTargetService { get; }
```

- *Type:* string

---

##### `ServerlessDeployment`<sup>Required</sup> <a name="ServerlessDeployment" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.serverlessDeployment"></a>

```csharp
public DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentList ServerlessDeployment { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentList">DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentList</a>

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.subnetwork"></a>

```csharp
public string Subnetwork { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SelfLinkInput`<sup>Optional</sup> <a name="SelfLinkInput" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.selfLinkInput"></a>

```csharp
public string SelfLinkInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeRegionNetworkEndpointGroupAppEngine <a name="DataGoogleComputeRegionNetworkEndpointGroupAppEngine" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngine.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionNetworkEndpointGroupAppEngine {

};
```


### DataGoogleComputeRegionNetworkEndpointGroupCloudFunction <a name="DataGoogleComputeRegionNetworkEndpointGroupCloudFunction" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionNetworkEndpointGroupCloudFunction {

};
```


### DataGoogleComputeRegionNetworkEndpointGroupCloudRun <a name="DataGoogleComputeRegionNetworkEndpointGroupCloudRun" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRun"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRun.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionNetworkEndpointGroupCloudRun {

};
```


### DataGoogleComputeRegionNetworkEndpointGroupConfig <a name="DataGoogleComputeRegionNetworkEndpointGroupConfig" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionNetworkEndpointGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null,
    string Name = null,
    string Project = null,
    string Region = null,
    string SelfLink = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_compute_region_network_endpoint_group#id DataGoogleComputeRegionNetworkEndpointGroup#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_compute_region_network_endpoint_group#project DataGoogleComputeRegionNetworkEndpointGroup#project}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.region">Region</a></code> | <code>string</code> | A reference to the region where the regional NEGs reside. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.selfLink">SelfLink</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_compute_region_network_endpoint_group#self_link DataGoogleComputeRegionNetworkEndpointGroup#self_link}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_compute_region_network_endpoint_group#id DataGoogleComputeRegionNetworkEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource;

provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_compute_region_network_endpoint_group#name DataGoogleComputeRegionNetworkEndpointGroup#name}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_compute_region_network_endpoint_group#project DataGoogleComputeRegionNetworkEndpointGroup#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

A reference to the region where the regional NEGs reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_compute_region_network_endpoint_group#region DataGoogleComputeRegionNetworkEndpointGroup#region}

---

##### `SelfLink`<sup>Optional</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupConfig.property.selfLink"></a>

```csharp
public string SelfLink { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_compute_region_network_endpoint_group#self_link DataGoogleComputeRegionNetworkEndpointGroup#self_link}.

---

### DataGoogleComputeRegionNetworkEndpointGroupPscData <a name="DataGoogleComputeRegionNetworkEndpointGroupPscData" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscData.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionNetworkEndpointGroupPscData {

};
```


### DataGoogleComputeRegionNetworkEndpointGroupServerlessDeployment <a name="DataGoogleComputeRegionNetworkEndpointGroupServerlessDeployment" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeployment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionNetworkEndpointGroupServerlessDeployment {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeRegionNetworkEndpointGroupAppEngineList <a name="DataGoogleComputeRegionNetworkEndpointGroupAppEngineList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionNetworkEndpointGroupAppEngineList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.get"></a>

```csharp
private DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference <a name="DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.urlMask">UrlMask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngine">DataGoogleComputeRegionNetworkEndpointGroupAppEngine</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `UrlMask`<sup>Required</sup> <a name="UrlMask" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.urlMask"></a>

```csharp
public string UrlMask { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionNetworkEndpointGroupAppEngine InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupAppEngine">DataGoogleComputeRegionNetworkEndpointGroupAppEngine</a>

---


### DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList <a name="DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.get"></a>

```csharp
private DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference <a name="DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.function">Function</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.urlMask">UrlMask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunction">DataGoogleComputeRegionNetworkEndpointGroupCloudFunction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Function`<sup>Required</sup> <a name="Function" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.function"></a>

```csharp
public string Function { get; }
```

- *Type:* string

---

##### `UrlMask`<sup>Required</sup> <a name="UrlMask" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.urlMask"></a>

```csharp
public string UrlMask { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionNetworkEndpointGroupCloudFunction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudFunction">DataGoogleComputeRegionNetworkEndpointGroupCloudFunction</a>

---


### DataGoogleComputeRegionNetworkEndpointGroupCloudRunList <a name="DataGoogleComputeRegionNetworkEndpointGroupCloudRunList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionNetworkEndpointGroupCloudRunList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.get"></a>

```csharp
private DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference <a name="DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.urlMask">UrlMask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRun">DataGoogleComputeRegionNetworkEndpointGroupCloudRun</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `UrlMask`<sup>Required</sup> <a name="UrlMask" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.urlMask"></a>

```csharp
public string UrlMask { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionNetworkEndpointGroupCloudRun InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupCloudRun">DataGoogleComputeRegionNetworkEndpointGroupCloudRun</a>

---


### DataGoogleComputeRegionNetworkEndpointGroupPscDataList <a name="DataGoogleComputeRegionNetworkEndpointGroupPscDataList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionNetworkEndpointGroupPscDataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataList.get"></a>

```csharp
private DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference <a name="DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.property.producerPort">ProducerPort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscData">DataGoogleComputeRegionNetworkEndpointGroupPscData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProducerPort`<sup>Required</sup> <a name="ProducerPort" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.property.producerPort"></a>

```csharp
public string ProducerPort { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscDataOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionNetworkEndpointGroupPscData InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupPscData">DataGoogleComputeRegionNetworkEndpointGroupPscData</a>

---


### DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentList <a name="DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentList" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentList.get"></a>

```csharp
private DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference <a name="DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.platform">Platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.resource">Resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.urlMask">UrlMask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeployment">DataGoogleComputeRegionNetworkEndpointGroupServerlessDeployment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.platform"></a>

```csharp
public string Platform { get; }
```

- *Type:* string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.resource"></a>

```csharp
public string Resource { get; }
```

- *Type:* string

---

##### `UrlMask`<sup>Required</sup> <a name="UrlMask" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.urlMask"></a>

```csharp
public string UrlMask { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeploymentOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRegionNetworkEndpointGroupServerlessDeployment InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeRegionNetworkEndpointGroup.DataGoogleComputeRegionNetworkEndpointGroupServerlessDeployment">DataGoogleComputeRegionNetworkEndpointGroupServerlessDeployment</a>

---



