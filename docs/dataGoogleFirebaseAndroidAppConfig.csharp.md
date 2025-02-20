# `dataGoogleFirebaseAndroidAppConfig` Submodule <a name="`dataGoogleFirebaseAndroidAppConfig` Submodule" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleFirebaseAndroidAppConfigA <a name="DataGoogleFirebaseAndroidAppConfigA" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_firebase_android_app_config google_firebase_android_app_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleFirebaseAndroidAppConfigA(Construct Scope, string Id, DataGoogleFirebaseAndroidAppConfigAConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig">DataGoogleFirebaseAndroidAppConfigAConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig">DataGoogleFirebaseAndroidAppConfigAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleFirebaseAndroidAppConfigA resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleFirebaseAndroidAppConfigA.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleFirebaseAndroidAppConfigA.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleFirebaseAndroidAppConfigA.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleFirebaseAndroidAppConfigA.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleFirebaseAndroidAppConfigA resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleFirebaseAndroidAppConfigA to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleFirebaseAndroidAppConfigA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_firebase_android_app_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleFirebaseAndroidAppConfigA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.configFileContents">ConfigFileContents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.configFilename">ConfigFilename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.appIdInput">AppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.appId">AppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ConfigFileContents`<sup>Required</sup> <a name="ConfigFileContents" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.configFileContents"></a>

```csharp
public string ConfigFileContents { get; }
```

- *Type:* string

---

##### `ConfigFilename`<sup>Required</sup> <a name="ConfigFilename" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.configFilename"></a>

```csharp
public string ConfigFilename { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.appIdInput"></a>

```csharp
public string AppIdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.appId"></a>

```csharp
public string AppId { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigA.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleFirebaseAndroidAppConfigAConfig <a name="DataGoogleFirebaseAndroidAppConfigAConfig" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleFirebaseAndroidAppConfigAConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AppId,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig.property.appId">AppId</a></code> | <code>string</code> | The id of the Firebase Android App. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig.property.project">Project</a></code> | <code>string</code> | The project id of the Firebase Android App. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig.property.appId"></a>

```csharp
public string AppId { get; set; }
```

- *Type:* string

The id of the Firebase Android App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_firebase_android_app_config#app_id DataGoogleFirebaseAndroidAppConfigA#app_id}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleFirebaseAndroidAppConfig.DataGoogleFirebaseAndroidAppConfigAConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The project id of the Firebase Android App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_firebase_android_app_config#project DataGoogleFirebaseAndroidAppConfigA#project}

---



