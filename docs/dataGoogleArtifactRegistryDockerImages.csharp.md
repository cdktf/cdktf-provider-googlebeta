# `dataGoogleArtifactRegistryDockerImages` Submodule <a name="`dataGoogleArtifactRegistryDockerImages` Submodule" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleArtifactRegistryDockerImages <a name="DataGoogleArtifactRegistryDockerImages" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/data-sources/google_artifact_registry_docker_images google_artifact_registry_docker_images}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleArtifactRegistryDockerImages(Construct Scope, string Id, DataGoogleArtifactRegistryDockerImagesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig">DataGoogleArtifactRegistryDockerImagesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig">DataGoogleArtifactRegistryDockerImagesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleArtifactRegistryDockerImages resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleArtifactRegistryDockerImages.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleArtifactRegistryDockerImages.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleArtifactRegistryDockerImages.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleArtifactRegistryDockerImages.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleArtifactRegistryDockerImages resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleArtifactRegistryDockerImages to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleArtifactRegistryDockerImages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/data-sources/google_artifact_registry_docker_images#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleArtifactRegistryDockerImages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.dockerImages">DockerImages</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList">DataGoogleArtifactRegistryDockerImagesDockerImagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.repositoryIdInput">RepositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.repositoryId">RepositoryId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DockerImages`<sup>Required</sup> <a name="DockerImages" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.dockerImages"></a>

```csharp
public DataGoogleArtifactRegistryDockerImagesDockerImagesList DockerImages { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList">DataGoogleArtifactRegistryDockerImagesDockerImagesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RepositoryIdInput`<sup>Optional</sup> <a name="RepositoryIdInput" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.repositoryIdInput"></a>

```csharp
public string RepositoryIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.repositoryId"></a>

```csharp
public string RepositoryId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleArtifactRegistryDockerImagesConfig <a name="DataGoogleArtifactRegistryDockerImagesConfig" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleArtifactRegistryDockerImagesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string RepositoryId,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/data-sources/google_artifact_registry_docker_images#location DataGoogleArtifactRegistryDockerImages#location}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.repositoryId">RepositoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/data-sources/google_artifact_registry_docker_images#repository_id DataGoogleArtifactRegistryDockerImages#repository_id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/data-sources/google_artifact_registry_docker_images#id DataGoogleArtifactRegistryDockerImages#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/data-sources/google_artifact_registry_docker_images#project DataGoogleArtifactRegistryDockerImages#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/data-sources/google_artifact_registry_docker_images#location DataGoogleArtifactRegistryDockerImages#location}.

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.repositoryId"></a>

```csharp
public string RepositoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/data-sources/google_artifact_registry_docker_images#repository_id DataGoogleArtifactRegistryDockerImages#repository_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/data-sources/google_artifact_registry_docker_images#id DataGoogleArtifactRegistryDockerImages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/data-sources/google_artifact_registry_docker_images#project DataGoogleArtifactRegistryDockerImages#project}.

---

### DataGoogleArtifactRegistryDockerImagesDockerImages <a name="DataGoogleArtifactRegistryDockerImagesDockerImages" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleArtifactRegistryDockerImagesDockerImages {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleArtifactRegistryDockerImagesDockerImagesList <a name="DataGoogleArtifactRegistryDockerImagesDockerImagesList" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleArtifactRegistryDockerImagesDockerImagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.get"></a>

```csharp
private DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference <a name="DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.buildTime">BuildTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.imageName">ImageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.imageSizeBytes">ImageSizeBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.mediaType">MediaType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.uploadTime">UploadTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImages">DataGoogleArtifactRegistryDockerImagesDockerImages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BuildTime`<sup>Required</sup> <a name="BuildTime" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.buildTime"></a>

```csharp
public string BuildTime { get; }
```

- *Type:* string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.imageName"></a>

```csharp
public string ImageName { get; }
```

- *Type:* string

---

##### `ImageSizeBytes`<sup>Required</sup> <a name="ImageSizeBytes" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.imageSizeBytes"></a>

```csharp
public string ImageSizeBytes { get; }
```

- *Type:* string

---

##### `MediaType`<sup>Required</sup> <a name="MediaType" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.mediaType"></a>

```csharp
public string MediaType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `UploadTime`<sup>Required</sup> <a name="UploadTime" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.uploadTime"></a>

```csharp
public string UploadTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleArtifactRegistryDockerImagesDockerImages InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImages">DataGoogleArtifactRegistryDockerImagesDockerImages</a>

---



