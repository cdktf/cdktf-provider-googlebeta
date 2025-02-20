# `dataGoogleKmsSecretAsymmetric` Submodule <a name="`dataGoogleKmsSecretAsymmetric` Submodule" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleKmsSecretAsymmetric <a name="DataGoogleKmsSecretAsymmetric" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_kms_secret_asymmetric google_kms_secret_asymmetric}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleKmsSecretAsymmetric(Construct Scope, string Id, DataGoogleKmsSecretAsymmetricConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig">DataGoogleKmsSecretAsymmetricConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig">DataGoogleKmsSecretAsymmetricConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.resetCrc32">ResetCrc32</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetCrc32` <a name="ResetCrc32" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.resetCrc32"></a>

```csharp
private void ResetCrc32()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleKmsSecretAsymmetric resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleKmsSecretAsymmetric.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleKmsSecretAsymmetric.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleKmsSecretAsymmetric.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleKmsSecretAsymmetric.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleKmsSecretAsymmetric resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleKmsSecretAsymmetric to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleKmsSecretAsymmetric that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_kms_secret_asymmetric#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleKmsSecretAsymmetric to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.plaintext">Plaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.ciphertextInput">CiphertextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.crc32Input">Crc32Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.cryptoKeyVersionInput">CryptoKeyVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.ciphertext">Ciphertext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.crc32">Crc32</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.cryptoKeyVersion">CryptoKeyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.plaintext"></a>

```csharp
public string Plaintext { get; }
```

- *Type:* string

---

##### `CiphertextInput`<sup>Optional</sup> <a name="CiphertextInput" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.ciphertextInput"></a>

```csharp
public string CiphertextInput { get; }
```

- *Type:* string

---

##### `Crc32Input`<sup>Optional</sup> <a name="Crc32Input" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.crc32Input"></a>

```csharp
public string Crc32Input { get; }
```

- *Type:* string

---

##### `CryptoKeyVersionInput`<sup>Optional</sup> <a name="CryptoKeyVersionInput" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.cryptoKeyVersionInput"></a>

```csharp
public string CryptoKeyVersionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Ciphertext`<sup>Required</sup> <a name="Ciphertext" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.ciphertext"></a>

```csharp
public string Ciphertext { get; }
```

- *Type:* string

---

##### `Crc32`<sup>Required</sup> <a name="Crc32" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.crc32"></a>

```csharp
public string Crc32 { get; }
```

- *Type:* string

---

##### `CryptoKeyVersion`<sup>Required</sup> <a name="CryptoKeyVersion" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.cryptoKeyVersion"></a>

```csharp
public string CryptoKeyVersion { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleKmsSecretAsymmetricConfig <a name="DataGoogleKmsSecretAsymmetricConfig" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleKmsSecretAsymmetricConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Ciphertext,
    string CryptoKeyVersion,
    string Crc32 = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.ciphertext">Ciphertext</a></code> | <code>string</code> | The public key encrypted ciphertext in base64 encoding. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.cryptoKeyVersion">CryptoKeyVersion</a></code> | <code>string</code> | The fully qualified KMS crypto key version name. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.crc32">Crc32</a></code> | <code>string</code> | The crc32 checksum of the ciphertext, hexadecimal encoding. If not specified, it will be computed. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_kms_secret_asymmetric#id DataGoogleKmsSecretAsymmetric#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Ciphertext`<sup>Required</sup> <a name="Ciphertext" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.ciphertext"></a>

```csharp
public string Ciphertext { get; set; }
```

- *Type:* string

The public key encrypted ciphertext in base64 encoding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_kms_secret_asymmetric#ciphertext DataGoogleKmsSecretAsymmetric#ciphertext}

---

##### `CryptoKeyVersion`<sup>Required</sup> <a name="CryptoKeyVersion" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.cryptoKeyVersion"></a>

```csharp
public string CryptoKeyVersion { get; set; }
```

- *Type:* string

The fully qualified KMS crypto key version name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_kms_secret_asymmetric#crypto_key_version DataGoogleKmsSecretAsymmetric#crypto_key_version}

---

##### `Crc32`<sup>Optional</sup> <a name="Crc32" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.crc32"></a>

```csharp
public string Crc32 { get; set; }
```

- *Type:* string

The crc32 checksum of the ciphertext, hexadecimal encoding. If not specified, it will be computed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_kms_secret_asymmetric#crc32 DataGoogleKmsSecretAsymmetric#crc32}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_kms_secret_asymmetric#id DataGoogleKmsSecretAsymmetric#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



