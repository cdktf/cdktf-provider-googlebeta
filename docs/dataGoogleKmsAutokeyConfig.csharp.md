# `dataGoogleKmsAutokeyConfig` Submodule <a name="`dataGoogleKmsAutokeyConfig` Submodule" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleKmsAutokeyConfig <a name="DataGoogleKmsAutokeyConfig" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/data-sources/google_kms_autokey_config google_kms_autokey_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleKmsAutokeyConfig(Construct Scope, string Id, DataGoogleKmsAutokeyConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfigConfig">DataGoogleKmsAutokeyConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfigConfig">DataGoogleKmsAutokeyConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleKmsAutokeyConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleKmsAutokeyConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleKmsAutokeyConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleKmsAutokeyConfig.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleKmsAutokeyConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleKmsAutokeyConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleKmsAutokeyConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleKmsAutokeyConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/data-sources/google_kms_autokey_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleKmsAutokeyConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.property.keyProject">KeyProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.property.folderInput">FolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.property.folder">Folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `KeyProject`<sup>Required</sup> <a name="KeyProject" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.property.keyProject"></a>

```csharp
public string KeyProject { get; }
```

- *Type:* string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.property.folderInput"></a>

```csharp
public string FolderInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.property.folder"></a>

```csharp
public string Folder { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleKmsAutokeyConfigConfig <a name="DataGoogleKmsAutokeyConfigConfig" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleKmsAutokeyConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Folder,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfigConfig.property.folder">Folder</a></code> | <code>string</code> | The folder for which to retrieve config. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/data-sources/google_kms_autokey_config#id DataGoogleKmsAutokeyConfig#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfigConfig.property.folder"></a>

```csharp
public string Folder { get; set; }
```

- *Type:* string

The folder for which to retrieve config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/data-sources/google_kms_autokey_config#folder DataGoogleKmsAutokeyConfig#folder}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleKmsAutokeyConfig.DataGoogleKmsAutokeyConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/data-sources/google_kms_autokey_config#id DataGoogleKmsAutokeyConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



