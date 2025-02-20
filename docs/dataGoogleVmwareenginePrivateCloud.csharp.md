# `dataGoogleVmwareenginePrivateCloud` Submodule <a name="`dataGoogleVmwareenginePrivateCloud` Submodule" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleVmwareenginePrivateCloud <a name="DataGoogleVmwareenginePrivateCloud" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_vmwareengine_private_cloud google_vmwareengine_private_cloud}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleVmwareenginePrivateCloud(Construct Scope, string Id, DataGoogleVmwareenginePrivateCloudConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig">DataGoogleVmwareenginePrivateCloudConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig">DataGoogleVmwareenginePrivateCloudConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleVmwareenginePrivateCloud resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleVmwareenginePrivateCloud.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleVmwareenginePrivateCloud.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleVmwareenginePrivateCloud.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleVmwareenginePrivateCloud.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleVmwareenginePrivateCloud resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleVmwareenginePrivateCloud to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleVmwareenginePrivateCloud that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_vmwareengine_private_cloud#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleVmwareenginePrivateCloud to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.deletionDelayHours">DeletionDelayHours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.hcx">Hcx</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList">DataGoogleVmwareenginePrivateCloudHcxList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.managementCluster">ManagementCluster</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList">DataGoogleVmwareenginePrivateCloudManagementClusterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList">DataGoogleVmwareenginePrivateCloudNetworkConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.nsx">Nsx</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList">DataGoogleVmwareenginePrivateCloudNsxList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.sendDeletionDelayHoursIfZero">SendDeletionDelayHoursIfZero</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.vcenter">Vcenter</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList">DataGoogleVmwareenginePrivateCloudVcenterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DeletionDelayHours`<sup>Required</sup> <a name="DeletionDelayHours" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.deletionDelayHours"></a>

```csharp
public double DeletionDelayHours { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Hcx`<sup>Required</sup> <a name="Hcx" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.hcx"></a>

```csharp
public DataGoogleVmwareenginePrivateCloudHcxList Hcx { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList">DataGoogleVmwareenginePrivateCloudHcxList</a>

---

##### `ManagementCluster`<sup>Required</sup> <a name="ManagementCluster" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.managementCluster"></a>

```csharp
public DataGoogleVmwareenginePrivateCloudManagementClusterList ManagementCluster { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList">DataGoogleVmwareenginePrivateCloudManagementClusterList</a>

---

##### `NetworkConfig`<sup>Required</sup> <a name="NetworkConfig" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.networkConfig"></a>

```csharp
public DataGoogleVmwareenginePrivateCloudNetworkConfigList NetworkConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList">DataGoogleVmwareenginePrivateCloudNetworkConfigList</a>

---

##### `Nsx`<sup>Required</sup> <a name="Nsx" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.nsx"></a>

```csharp
public DataGoogleVmwareenginePrivateCloudNsxList Nsx { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList">DataGoogleVmwareenginePrivateCloudNsxList</a>

---

##### `SendDeletionDelayHoursIfZero`<sup>Required</sup> <a name="SendDeletionDelayHoursIfZero" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.sendDeletionDelayHoursIfZero"></a>

```csharp
public IResolvable SendDeletionDelayHoursIfZero { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `Vcenter`<sup>Required</sup> <a name="Vcenter" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.vcenter"></a>

```csharp
public DataGoogleVmwareenginePrivateCloudVcenterList Vcenter { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList">DataGoogleVmwareenginePrivateCloudVcenterList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleVmwareenginePrivateCloudConfig <a name="DataGoogleVmwareenginePrivateCloudConfig" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleVmwareenginePrivateCloudConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.location">Location</a></code> | <code>string</code> | The location where the PrivateCloud should reside. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.name">Name</a></code> | <code>string</code> | The ID of the PrivateCloud. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_vmwareengine_private_cloud#id DataGoogleVmwareenginePrivateCloud#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_vmwareengine_private_cloud#project DataGoogleVmwareenginePrivateCloud#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location where the PrivateCloud should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_vmwareengine_private_cloud#location DataGoogleVmwareenginePrivateCloud#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The ID of the PrivateCloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_vmwareengine_private_cloud#name DataGoogleVmwareenginePrivateCloud#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_vmwareengine_private_cloud#id DataGoogleVmwareenginePrivateCloud#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_vmwareengine_private_cloud#project DataGoogleVmwareenginePrivateCloud#project}.

---

### DataGoogleVmwareenginePrivateCloudHcx <a name="DataGoogleVmwareenginePrivateCloudHcx" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcx"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcx.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleVmwareenginePrivateCloudHcx {

};
```


### DataGoogleVmwareenginePrivateCloudManagementCluster <a name="DataGoogleVmwareenginePrivateCloudManagementCluster" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleVmwareenginePrivateCloudManagementCluster {

};
```


### DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettings <a name="DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettings" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettings {

};
```


### DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPolicies <a name="DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPolicies" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPolicies {

};
```


### DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds <a name="DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds {

};
```


### DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds <a name="DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds {

};
```


### DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds <a name="DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds {

};
```


### DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs <a name="DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs {

};
```


### DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfig <a name="DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfig" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfig {

};
```


### DataGoogleVmwareenginePrivateCloudNetworkConfig <a name="DataGoogleVmwareenginePrivateCloudNetworkConfig" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleVmwareenginePrivateCloudNetworkConfig {

};
```


### DataGoogleVmwareenginePrivateCloudNsx <a name="DataGoogleVmwareenginePrivateCloudNsx" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsx"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsx.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleVmwareenginePrivateCloudNsx {

};
```


### DataGoogleVmwareenginePrivateCloudVcenter <a name="DataGoogleVmwareenginePrivateCloudVcenter" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleVmwareenginePrivateCloudVcenter {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleVmwareenginePrivateCloudHcxList <a name="DataGoogleVmwareenginePrivateCloudHcxList" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleVmwareenginePrivateCloudHcxList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.get"></a>

```csharp
private DataGoogleVmwareenginePrivateCloudHcxOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleVmwareenginePrivateCloudHcxOutputReference <a name="DataGoogleVmwareenginePrivateCloudHcxOutputReference" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleVmwareenginePrivateCloudHcxOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.property.fqdn">Fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.property.internalIp">InternalIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcx">DataGoogleVmwareenginePrivateCloudHcx</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.property.fqdn"></a>

```csharp
public string Fqdn { get; }
```

- *Type:* string

---

##### `InternalIp`<sup>Required</sup> <a name="InternalIp" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.property.internalIp"></a>

```csharp
public string InternalIp { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.property.internalValue"></a>

```csharp
public DataGoogleVmwareenginePrivateCloudHcx InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcx">DataGoogleVmwareenginePrivateCloudHcx</a>

---


### DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList <a name="DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.get"></a>

```csharp
private DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference <a name="DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleIn">ScaleIn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleOut">ScaleOut</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds">DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScaleIn`<sup>Required</sup> <a name="ScaleIn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleIn"></a>

```csharp
public double ScaleIn { get; }
```

- *Type:* double

---

##### `ScaleOut`<sup>Required</sup> <a name="ScaleOut" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleOut"></a>

```csharp
public double ScaleOut { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds">DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds</a>

---


### DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList <a name="DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.get"></a>

```csharp
private DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference <a name="DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleIn">ScaleIn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleOut">ScaleOut</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds">DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScaleIn`<sup>Required</sup> <a name="ScaleIn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleIn"></a>

```csharp
public double ScaleIn { get; }
```

- *Type:* double

---

##### `ScaleOut`<sup>Required</sup> <a name="ScaleOut" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleOut"></a>

```csharp
public double ScaleOut { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds">DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds</a>

---


### DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList <a name="DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.get"></a>

```csharp
private DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference <a name="DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.autoscalePolicyId">AutoscalePolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.consumedMemoryThresholds">ConsumedMemoryThresholds</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList">DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.cpuThresholds">CpuThresholds</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList">DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.nodeTypeId">NodeTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.scaleOutSize">ScaleOutSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.storageThresholds">StorageThresholds</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList">DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPolicies">DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoscalePolicyId`<sup>Required</sup> <a name="AutoscalePolicyId" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.autoscalePolicyId"></a>

```csharp
public string AutoscalePolicyId { get; }
```

- *Type:* string

---

##### `ConsumedMemoryThresholds`<sup>Required</sup> <a name="ConsumedMemoryThresholds" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.consumedMemoryThresholds"></a>

```csharp
public DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList ConsumedMemoryThresholds { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList">DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList</a>

---

##### `CpuThresholds`<sup>Required</sup> <a name="CpuThresholds" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.cpuThresholds"></a>

```csharp
public DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList CpuThresholds { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList">DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList</a>

---

##### `NodeTypeId`<sup>Required</sup> <a name="NodeTypeId" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.nodeTypeId"></a>

```csharp
public string NodeTypeId { get; }
```

- *Type:* string

---

##### `ScaleOutSize`<sup>Required</sup> <a name="ScaleOutSize" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.scaleOutSize"></a>

```csharp
public double ScaleOutSize { get; }
```

- *Type:* double

---

##### `StorageThresholds`<sup>Required</sup> <a name="StorageThresholds" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.storageThresholds"></a>

```csharp
public DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList StorageThresholds { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList">DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPolicies InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPolicies">DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPolicies</a>

---


### DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList <a name="DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.get"></a>

```csharp
private DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference <a name="DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleIn">ScaleIn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleOut">ScaleOut</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds">DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScaleIn`<sup>Required</sup> <a name="ScaleIn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleIn"></a>

```csharp
public double ScaleIn { get; }
```

- *Type:* double

---

##### `ScaleOut`<sup>Required</sup> <a name="ScaleOut" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleOut"></a>

```csharp
public double ScaleOut { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds">DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds</a>

---


### DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList <a name="DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.get"></a>

```csharp
private DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference <a name="DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.property.autoscalingPolicies">AutoscalingPolicies</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList">DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.property.coolDownPeriod">CoolDownPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.property.maxClusterNodeCount">MaxClusterNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.property.minClusterNodeCount">MinClusterNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettings">DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoscalingPolicies`<sup>Required</sup> <a name="AutoscalingPolicies" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.property.autoscalingPolicies"></a>

```csharp
public DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList AutoscalingPolicies { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList">DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList</a>

---

##### `CoolDownPeriod`<sup>Required</sup> <a name="CoolDownPeriod" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.property.coolDownPeriod"></a>

```csharp
public string CoolDownPeriod { get; }
```

- *Type:* string

---

##### `MaxClusterNodeCount`<sup>Required</sup> <a name="MaxClusterNodeCount" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.property.maxClusterNodeCount"></a>

```csharp
public double MaxClusterNodeCount { get; }
```

- *Type:* double

---

##### `MinClusterNodeCount`<sup>Required</sup> <a name="MinClusterNodeCount" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.property.minClusterNodeCount"></a>

```csharp
public double MinClusterNodeCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettings">DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettings</a>

---


### DataGoogleVmwareenginePrivateCloudManagementClusterList <a name="DataGoogleVmwareenginePrivateCloudManagementClusterList" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleVmwareenginePrivateCloudManagementClusterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.get"></a>

```csharp
private DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList <a name="DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.get"></a>

```csharp
private DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference <a name="DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.customCoreCount">CustomCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeCount">NodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeTypeId">NodeTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs">DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomCoreCount`<sup>Required</sup> <a name="CustomCoreCount" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.customCoreCount"></a>

```csharp
public double CustomCoreCount { get; }
```

- *Type:* double

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeCount"></a>

```csharp
public double NodeCount { get; }
```

- *Type:* double

---

##### `NodeTypeId`<sup>Required</sup> <a name="NodeTypeId" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeTypeId"></a>

```csharp
public string NodeTypeId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs">DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs</a>

---


### DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference <a name="DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.autoscalingSettings">AutoscalingSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList">DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.nodeTypeConfigs">NodeTypeConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList">DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.stretchedClusterConfig">StretchedClusterConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList">DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementCluster">DataGoogleVmwareenginePrivateCloudManagementCluster</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoscalingSettings`<sup>Required</sup> <a name="AutoscalingSettings" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.autoscalingSettings"></a>

```csharp
public DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList AutoscalingSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList">DataGoogleVmwareenginePrivateCloudManagementClusterAutoscalingSettingsList</a>

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `NodeTypeConfigs`<sup>Required</sup> <a name="NodeTypeConfigs" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.nodeTypeConfigs"></a>

```csharp
public DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList NodeTypeConfigs { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList">DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList</a>

---

##### `StretchedClusterConfig`<sup>Required</sup> <a name="StretchedClusterConfig" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.stretchedClusterConfig"></a>

```csharp
public DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList StretchedClusterConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList">DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.internalValue"></a>

```csharp
public DataGoogleVmwareenginePrivateCloudManagementCluster InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementCluster">DataGoogleVmwareenginePrivateCloudManagementCluster</a>

---


### DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList <a name="DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.get"></a>

```csharp
private DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference <a name="DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.property.preferredLocation">PreferredLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.property.secondaryLocation">SecondaryLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfig">DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PreferredLocation`<sup>Required</sup> <a name="PreferredLocation" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.property.preferredLocation"></a>

```csharp
public string PreferredLocation { get; }
```

- *Type:* string

---

##### `SecondaryLocation`<sup>Required</sup> <a name="SecondaryLocation" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.property.secondaryLocation"></a>

```csharp
public string SecondaryLocation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfig">DataGoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfig</a>

---


### DataGoogleVmwareenginePrivateCloudNetworkConfigList <a name="DataGoogleVmwareenginePrivateCloudNetworkConfigList" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleVmwareenginePrivateCloudNetworkConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.get"></a>

```csharp
private DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference <a name="DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.dnsServerIp">DnsServerIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.managementCidr">ManagementCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.managementIpAddressLayoutVersion">ManagementIpAddressLayoutVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.vmwareEngineNetwork">VmwareEngineNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.vmwareEngineNetworkCanonical">VmwareEngineNetworkCanonical</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfig">DataGoogleVmwareenginePrivateCloudNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsServerIp`<sup>Required</sup> <a name="DnsServerIp" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.dnsServerIp"></a>

```csharp
public string DnsServerIp { get; }
```

- *Type:* string

---

##### `ManagementCidr`<sup>Required</sup> <a name="ManagementCidr" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.managementCidr"></a>

```csharp
public string ManagementCidr { get; }
```

- *Type:* string

---

##### `ManagementIpAddressLayoutVersion`<sup>Required</sup> <a name="ManagementIpAddressLayoutVersion" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.managementIpAddressLayoutVersion"></a>

```csharp
public double ManagementIpAddressLayoutVersion { get; }
```

- *Type:* double

---

##### `VmwareEngineNetwork`<sup>Required</sup> <a name="VmwareEngineNetwork" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.vmwareEngineNetwork"></a>

```csharp
public string VmwareEngineNetwork { get; }
```

- *Type:* string

---

##### `VmwareEngineNetworkCanonical`<sup>Required</sup> <a name="VmwareEngineNetworkCanonical" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.vmwareEngineNetworkCanonical"></a>

```csharp
public string VmwareEngineNetworkCanonical { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleVmwareenginePrivateCloudNetworkConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfig">DataGoogleVmwareenginePrivateCloudNetworkConfig</a>

---


### DataGoogleVmwareenginePrivateCloudNsxList <a name="DataGoogleVmwareenginePrivateCloudNsxList" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleVmwareenginePrivateCloudNsxList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.get"></a>

```csharp
private DataGoogleVmwareenginePrivateCloudNsxOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleVmwareenginePrivateCloudNsxOutputReference <a name="DataGoogleVmwareenginePrivateCloudNsxOutputReference" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleVmwareenginePrivateCloudNsxOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.property.fqdn">Fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.property.internalIp">InternalIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsx">DataGoogleVmwareenginePrivateCloudNsx</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.property.fqdn"></a>

```csharp
public string Fqdn { get; }
```

- *Type:* string

---

##### `InternalIp`<sup>Required</sup> <a name="InternalIp" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.property.internalIp"></a>

```csharp
public string InternalIp { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.property.internalValue"></a>

```csharp
public DataGoogleVmwareenginePrivateCloudNsx InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsx">DataGoogleVmwareenginePrivateCloudNsx</a>

---


### DataGoogleVmwareenginePrivateCloudVcenterList <a name="DataGoogleVmwareenginePrivateCloudVcenterList" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleVmwareenginePrivateCloudVcenterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.get"></a>

```csharp
private DataGoogleVmwareenginePrivateCloudVcenterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleVmwareenginePrivateCloudVcenterOutputReference <a name="DataGoogleVmwareenginePrivateCloudVcenterOutputReference" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleVmwareenginePrivateCloudVcenterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.property.fqdn">Fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.property.internalIp">InternalIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenter">DataGoogleVmwareenginePrivateCloudVcenter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.property.fqdn"></a>

```csharp
public string Fqdn { get; }
```

- *Type:* string

---

##### `InternalIp`<sup>Required</sup> <a name="InternalIp" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.property.internalIp"></a>

```csharp
public string InternalIp { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.property.internalValue"></a>

```csharp
public DataGoogleVmwareenginePrivateCloudVcenter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenter">DataGoogleVmwareenginePrivateCloudVcenter</a>

---



