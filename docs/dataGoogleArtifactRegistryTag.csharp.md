# `dataGoogleArtifactRegistryTag` Submodule <a name="`dataGoogleArtifactRegistryTag` Submodule" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleArtifactRegistryTag <a name="DataGoogleArtifactRegistryTag" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/data-sources/google_artifact_registry_tag google_artifact_registry_tag}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleArtifactRegistryTag(Construct Scope, string Id, DataGoogleArtifactRegistryTagConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig">DataGoogleArtifactRegistryTagConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig">DataGoogleArtifactRegistryTagConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleArtifactRegistryTag resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleArtifactRegistryTag.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleArtifactRegistryTag.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleArtifactRegistryTag.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleArtifactRegistryTag.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleArtifactRegistryTag resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleArtifactRegistryTag to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleArtifactRegistryTag that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/data-sources/google_artifact_registry_tag#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleArtifactRegistryTag to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.packageNameInput">PackageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.repositoryIdInput">RepositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.tagNameInput">TagNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.packageName">PackageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.repositoryId">RepositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.tagName">TagName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `PackageNameInput`<sup>Optional</sup> <a name="PackageNameInput" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.packageNameInput"></a>

```csharp
public string PackageNameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RepositoryIdInput`<sup>Optional</sup> <a name="RepositoryIdInput" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.repositoryIdInput"></a>

```csharp
public string RepositoryIdInput { get; }
```

- *Type:* string

---

##### `TagNameInput`<sup>Optional</sup> <a name="TagNameInput" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.tagNameInput"></a>

```csharp
public string TagNameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `PackageName`<sup>Required</sup> <a name="PackageName" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.packageName"></a>

```csharp
public string PackageName { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.repositoryId"></a>

```csharp
public string RepositoryId { get; }
```

- *Type:* string

---

##### `TagName`<sup>Required</sup> <a name="TagName" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.tagName"></a>

```csharp
public string TagName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleArtifactRegistryTagConfig <a name="DataGoogleArtifactRegistryTagConfig" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleArtifactRegistryTagConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string PackageName,
    string RepositoryId,
    string TagName,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/data-sources/google_artifact_registry_tag#location DataGoogleArtifactRegistryTag#location}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.packageName">PackageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/data-sources/google_artifact_registry_tag#package_name DataGoogleArtifactRegistryTag#package_name}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.repositoryId">RepositoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/data-sources/google_artifact_registry_tag#repository_id DataGoogleArtifactRegistryTag#repository_id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.tagName">TagName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/data-sources/google_artifact_registry_tag#tag_name DataGoogleArtifactRegistryTag#tag_name}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/data-sources/google_artifact_registry_tag#id DataGoogleArtifactRegistryTag#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/data-sources/google_artifact_registry_tag#project DataGoogleArtifactRegistryTag#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/data-sources/google_artifact_registry_tag#location DataGoogleArtifactRegistryTag#location}.

---

##### `PackageName`<sup>Required</sup> <a name="PackageName" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.packageName"></a>

```csharp
public string PackageName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/data-sources/google_artifact_registry_tag#package_name DataGoogleArtifactRegistryTag#package_name}.

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.repositoryId"></a>

```csharp
public string RepositoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/data-sources/google_artifact_registry_tag#repository_id DataGoogleArtifactRegistryTag#repository_id}.

---

##### `TagName`<sup>Required</sup> <a name="TagName" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.tagName"></a>

```csharp
public string TagName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/data-sources/google_artifact_registry_tag#tag_name DataGoogleArtifactRegistryTag#tag_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/data-sources/google_artifact_registry_tag#id DataGoogleArtifactRegistryTag#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/data-sources/google_artifact_registry_tag#project DataGoogleArtifactRegistryTag#project}.

---



