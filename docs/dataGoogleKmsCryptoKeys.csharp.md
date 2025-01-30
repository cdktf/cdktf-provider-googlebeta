# `dataGoogleKmsCryptoKeys` Submodule <a name="`dataGoogleKmsCryptoKeys` Submodule" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleKmsCryptoKeys <a name="DataGoogleKmsCryptoKeys" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/data-sources/google_kms_crypto_keys google_kms_crypto_keys}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleKmsCryptoKeys(Construct Scope, string Id, DataGoogleKmsCryptoKeysConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig">DataGoogleKmsCryptoKeysConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig">DataGoogleKmsCryptoKeysConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleKmsCryptoKeys resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleKmsCryptoKeys.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleKmsCryptoKeys.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleKmsCryptoKeys.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleKmsCryptoKeys.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleKmsCryptoKeys resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleKmsCryptoKeys to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleKmsCryptoKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/data-sources/google_kms_crypto_keys#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleKmsCryptoKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.keys">Keys</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList">DataGoogleKmsCryptoKeysKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.keyRingInput">KeyRingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.keyRing">KeyRing</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Keys`<sup>Required</sup> <a name="Keys" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.keys"></a>

```csharp
public DataGoogleKmsCryptoKeysKeysList Keys { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList">DataGoogleKmsCryptoKeysKeysList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyRingInput`<sup>Optional</sup> <a name="KeyRingInput" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.keyRingInput"></a>

```csharp
public string KeyRingInput { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyRing`<sup>Required</sup> <a name="KeyRing" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.keyRing"></a>

```csharp
public string KeyRing { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeys.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleKmsCryptoKeysConfig <a name="DataGoogleKmsCryptoKeysConfig" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleKmsCryptoKeysConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string KeyRing,
    string Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.keyRing">KeyRing</a></code> | <code>string</code> | The key ring that the keys belongs to. Format: 'projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}'. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.filter">Filter</a></code> | <code>string</code> | The filter argument is used to add a filter query parameter that limits which keys are retrieved by the data source: ?filter={{filter}}. Example values:. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/data-sources/google_kms_crypto_keys#id DataGoogleKmsCryptoKeys#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `KeyRing`<sup>Required</sup> <a name="KeyRing" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.keyRing"></a>

```csharp
public string KeyRing { get; set; }
```

- *Type:* string

The key ring that the keys belongs to. Format: 'projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/data-sources/google_kms_crypto_keys#key_ring DataGoogleKmsCryptoKeys#key_ring}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

The filter argument is used to add a filter query parameter that limits which keys are retrieved by the data source: ?filter={{filter}}. Example values:.

* "name:my-key-" will retrieve keys that contain "my-key-" anywhere in their name. Note: names take the form projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}/cryptoKeys/{{cryptoKey}}.
* "name=projects/my-project/locations/global/keyRings/my-key-ring/cryptoKeys/my-key-1" will only retrieve a key with that exact name.

[See the documentation about using filters](https://cloud.google.com/kms/docs/sorting-and-filtering)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/data-sources/google_kms_crypto_keys#filter DataGoogleKmsCryptoKeys#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/data-sources/google_kms_crypto_keys#id DataGoogleKmsCryptoKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleKmsCryptoKeysKeys <a name="DataGoogleKmsCryptoKeysKeys" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeys.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleKmsCryptoKeysKeys {

};
```


### DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicy <a name="DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicy" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicy {

};
```


### DataGoogleKmsCryptoKeysKeysPrimary <a name="DataGoogleKmsCryptoKeysKeysPrimary" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimary.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleKmsCryptoKeysKeysPrimary {

};
```


### DataGoogleKmsCryptoKeysKeysVersionTemplate <a name="DataGoogleKmsCryptoKeysKeysVersionTemplate" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleKmsCryptoKeysKeysVersionTemplate {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList <a name="DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.get"></a>

```csharp
private DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference <a name="DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.property.allowedAccessReasons">AllowedAccessReasons</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicy">DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedAccessReasons`<sup>Required</sup> <a name="AllowedAccessReasons" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.property.allowedAccessReasons"></a>

```csharp
public string[] AllowedAccessReasons { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyOutputReference.property.internalValue"></a>

```csharp
public DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicy">DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicy</a>

---


### DataGoogleKmsCryptoKeysKeysList <a name="DataGoogleKmsCryptoKeysKeysList" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleKmsCryptoKeysKeysList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.get"></a>

```csharp
private DataGoogleKmsCryptoKeysKeysOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleKmsCryptoKeysKeysOutputReference <a name="DataGoogleKmsCryptoKeysKeysOutputReference" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleKmsCryptoKeysKeysOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.cryptoKeyBackend">CryptoKeyBackend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.destroyScheduledDuration">DestroyScheduledDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.importOnly">ImportOnly</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.keyAccessJustificationsPolicy">KeyAccessJustificationsPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList">DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.keyRing">KeyRing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.labels">Labels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.primary">Primary</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList">DataGoogleKmsCryptoKeysKeysPrimaryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.purpose">Purpose</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.rotationPeriod">RotationPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.skipInitialVersionCreation">SkipInitialVersionCreation</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.versionTemplate">VersionTemplate</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList">DataGoogleKmsCryptoKeysKeysVersionTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeys">DataGoogleKmsCryptoKeysKeys</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CryptoKeyBackend`<sup>Required</sup> <a name="CryptoKeyBackend" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.cryptoKeyBackend"></a>

```csharp
public string CryptoKeyBackend { get; }
```

- *Type:* string

---

##### `DestroyScheduledDuration`<sup>Required</sup> <a name="DestroyScheduledDuration" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.destroyScheduledDuration"></a>

```csharp
public string DestroyScheduledDuration { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImportOnly`<sup>Required</sup> <a name="ImportOnly" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.importOnly"></a>

```csharp
public IResolvable ImportOnly { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `KeyAccessJustificationsPolicy`<sup>Required</sup> <a name="KeyAccessJustificationsPolicy" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.keyAccessJustificationsPolicy"></a>

```csharp
public DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList KeyAccessJustificationsPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList">DataGoogleKmsCryptoKeysKeysKeyAccessJustificationsPolicyList</a>

---

##### `KeyRing`<sup>Required</sup> <a name="KeyRing" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.keyRing"></a>

```csharp
public string KeyRing { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.labels"></a>

```csharp
public StringMap Labels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.primary"></a>

```csharp
public DataGoogleKmsCryptoKeysKeysPrimaryList Primary { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList">DataGoogleKmsCryptoKeysKeysPrimaryList</a>

---

##### `Purpose`<sup>Required</sup> <a name="Purpose" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.purpose"></a>

```csharp
public string Purpose { get; }
```

- *Type:* string

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.rotationPeriod"></a>

```csharp
public string RotationPeriod { get; }
```

- *Type:* string

---

##### `SkipInitialVersionCreation`<sup>Required</sup> <a name="SkipInitialVersionCreation" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.skipInitialVersionCreation"></a>

```csharp
public IResolvable SkipInitialVersionCreation { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `VersionTemplate`<sup>Required</sup> <a name="VersionTemplate" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.versionTemplate"></a>

```csharp
public DataGoogleKmsCryptoKeysKeysVersionTemplateList VersionTemplate { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList">DataGoogleKmsCryptoKeysKeysVersionTemplateList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysOutputReference.property.internalValue"></a>

```csharp
public DataGoogleKmsCryptoKeysKeys InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeys">DataGoogleKmsCryptoKeysKeys</a>

---


### DataGoogleKmsCryptoKeysKeysPrimaryList <a name="DataGoogleKmsCryptoKeysKeysPrimaryList" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleKmsCryptoKeysKeysPrimaryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.get"></a>

```csharp
private DataGoogleKmsCryptoKeysKeysPrimaryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleKmsCryptoKeysKeysPrimaryOutputReference <a name="DataGoogleKmsCryptoKeysKeysPrimaryOutputReference" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleKmsCryptoKeysKeysPrimaryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimary">DataGoogleKmsCryptoKeysKeysPrimary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimaryOutputReference.property.internalValue"></a>

```csharp
public DataGoogleKmsCryptoKeysKeysPrimary InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysPrimary">DataGoogleKmsCryptoKeysKeysPrimary</a>

---


### DataGoogleKmsCryptoKeysKeysVersionTemplateList <a name="DataGoogleKmsCryptoKeysKeysVersionTemplateList" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleKmsCryptoKeysKeysVersionTemplateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.get"></a>

```csharp
private DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference <a name="DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.property.algorithm">Algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.property.protectionLevel">ProtectionLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplate">DataGoogleKmsCryptoKeysKeysVersionTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.property.algorithm"></a>

```csharp
public string Algorithm { get; }
```

- *Type:* string

---

##### `ProtectionLevel`<sup>Required</sup> <a name="ProtectionLevel" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.property.protectionLevel"></a>

```csharp
public string ProtectionLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplateOutputReference.property.internalValue"></a>

```csharp
public DataGoogleKmsCryptoKeysKeysVersionTemplate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKeys.DataGoogleKmsCryptoKeysKeysVersionTemplate">DataGoogleKmsCryptoKeysKeysVersionTemplate</a>

---



