# `dataGoogleKmsCryptoKey` Submodule <a name="`dataGoogleKmsCryptoKey` Submodule" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleKmsCryptoKey <a name="DataGoogleKmsCryptoKey" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/data-sources/google_kms_crypto_key google_kms_crypto_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleKmsCryptoKey(Construct Scope, string Id, DataGoogleKmsCryptoKeyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig">DataGoogleKmsCryptoKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig">DataGoogleKmsCryptoKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleKmsCryptoKey resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleKmsCryptoKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleKmsCryptoKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleKmsCryptoKey.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleKmsCryptoKey.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleKmsCryptoKey resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleKmsCryptoKey to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleKmsCryptoKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/data-sources/google_kms_crypto_key#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleKmsCryptoKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.cryptoKeyBackend">CryptoKeyBackend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.destroyScheduledDuration">DestroyScheduledDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.importOnly">ImportOnly</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.keyAccessJustificationsPolicy">KeyAccessJustificationsPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyList">DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.labels">Labels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.primary">Primary</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList">DataGoogleKmsCryptoKeyPrimaryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.purpose">Purpose</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.rotationPeriod">RotationPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.skipInitialVersionCreation">SkipInitialVersionCreation</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.versionTemplate">VersionTemplate</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList">DataGoogleKmsCryptoKeyVersionTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.keyRingInput">KeyRingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.keyRing">KeyRing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CryptoKeyBackend`<sup>Required</sup> <a name="CryptoKeyBackend" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.cryptoKeyBackend"></a>

```csharp
public string CryptoKeyBackend { get; }
```

- *Type:* string

---

##### `DestroyScheduledDuration`<sup>Required</sup> <a name="DestroyScheduledDuration" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.destroyScheduledDuration"></a>

```csharp
public string DestroyScheduledDuration { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ImportOnly`<sup>Required</sup> <a name="ImportOnly" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.importOnly"></a>

```csharp
public IResolvable ImportOnly { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `KeyAccessJustificationsPolicy`<sup>Required</sup> <a name="KeyAccessJustificationsPolicy" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.keyAccessJustificationsPolicy"></a>

```csharp
public DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyList KeyAccessJustificationsPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyList">DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyList</a>

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.labels"></a>

```csharp
public StringMap Labels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.primary"></a>

```csharp
public DataGoogleKmsCryptoKeyPrimaryList Primary { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList">DataGoogleKmsCryptoKeyPrimaryList</a>

---

##### `Purpose`<sup>Required</sup> <a name="Purpose" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.purpose"></a>

```csharp
public string Purpose { get; }
```

- *Type:* string

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.rotationPeriod"></a>

```csharp
public string RotationPeriod { get; }
```

- *Type:* string

---

##### `SkipInitialVersionCreation`<sup>Required</sup> <a name="SkipInitialVersionCreation" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.skipInitialVersionCreation"></a>

```csharp
public IResolvable SkipInitialVersionCreation { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `VersionTemplate`<sup>Required</sup> <a name="VersionTemplate" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.versionTemplate"></a>

```csharp
public DataGoogleKmsCryptoKeyVersionTemplateList VersionTemplate { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList">DataGoogleKmsCryptoKeyVersionTemplateList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyRingInput`<sup>Optional</sup> <a name="KeyRingInput" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.keyRingInput"></a>

```csharp
public string KeyRingInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyRing`<sup>Required</sup> <a name="KeyRing" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.keyRing"></a>

```csharp
public string KeyRing { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleKmsCryptoKeyConfig <a name="DataGoogleKmsCryptoKeyConfig" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleKmsCryptoKeyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string KeyRing,
    string Name,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.keyRing">KeyRing</a></code> | <code>string</code> | The KeyRing that this key belongs to. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.name">Name</a></code> | <code>string</code> | The resource name for the CryptoKey. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/data-sources/google_kms_crypto_key#id DataGoogleKmsCryptoKey#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `KeyRing`<sup>Required</sup> <a name="KeyRing" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.keyRing"></a>

```csharp
public string KeyRing { get; set; }
```

- *Type:* string

The KeyRing that this key belongs to. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/data-sources/google_kms_crypto_key#key_ring DataGoogleKmsCryptoKey#key_ring}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The resource name for the CryptoKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/data-sources/google_kms_crypto_key#name DataGoogleKmsCryptoKey#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/data-sources/google_kms_crypto_key#id DataGoogleKmsCryptoKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicy <a name="DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicy" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicy {

};
```


### DataGoogleKmsCryptoKeyPrimary <a name="DataGoogleKmsCryptoKeyPrimary" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimary.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleKmsCryptoKeyPrimary {

};
```


### DataGoogleKmsCryptoKeyVersionTemplate <a name="DataGoogleKmsCryptoKeyVersionTemplate" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleKmsCryptoKeyVersionTemplate {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyList <a name="DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyList" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyList.get"></a>

```csharp
private DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference <a name="DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.property.allowedAccessReasons">AllowedAccessReasons</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicy">DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedAccessReasons`<sup>Required</sup> <a name="AllowedAccessReasons" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.property.allowedAccessReasons"></a>

```csharp
public string[] AllowedAccessReasons { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicyOutputReference.property.internalValue"></a>

```csharp
public DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicy">DataGoogleKmsCryptoKeyKeyAccessJustificationsPolicy</a>

---


### DataGoogleKmsCryptoKeyPrimaryList <a name="DataGoogleKmsCryptoKeyPrimaryList" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleKmsCryptoKeyPrimaryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.get"></a>

```csharp
private DataGoogleKmsCryptoKeyPrimaryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleKmsCryptoKeyPrimaryOutputReference <a name="DataGoogleKmsCryptoKeyPrimaryOutputReference" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleKmsCryptoKeyPrimaryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimary">DataGoogleKmsCryptoKeyPrimary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimaryOutputReference.property.internalValue"></a>

```csharp
public DataGoogleKmsCryptoKeyPrimary InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyPrimary">DataGoogleKmsCryptoKeyPrimary</a>

---


### DataGoogleKmsCryptoKeyVersionTemplateList <a name="DataGoogleKmsCryptoKeyVersionTemplateList" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleKmsCryptoKeyVersionTemplateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.get"></a>

```csharp
private DataGoogleKmsCryptoKeyVersionTemplateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleKmsCryptoKeyVersionTemplateOutputReference <a name="DataGoogleKmsCryptoKeyVersionTemplateOutputReference" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleKmsCryptoKeyVersionTemplateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.property.algorithm">Algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.property.protectionLevel">ProtectionLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplate">DataGoogleKmsCryptoKeyVersionTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.property.algorithm"></a>

```csharp
public string Algorithm { get; }
```

- *Type:* string

---

##### `ProtectionLevel`<sup>Required</sup> <a name="ProtectionLevel" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.property.protectionLevel"></a>

```csharp
public string ProtectionLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.property.internalValue"></a>

```csharp
public DataGoogleKmsCryptoKeyVersionTemplate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplate">DataGoogleKmsCryptoKeyVersionTemplate</a>

---



