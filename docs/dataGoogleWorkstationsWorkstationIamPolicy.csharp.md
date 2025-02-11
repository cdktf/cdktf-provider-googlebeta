# `dataGoogleWorkstationsWorkstationIamPolicy` Submodule <a name="`dataGoogleWorkstationsWorkstationIamPolicy` Submodule" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleWorkstationsWorkstationIamPolicy <a name="DataGoogleWorkstationsWorkstationIamPolicy" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/data-sources/google_workstations_workstation_iam_policy google_workstations_workstation_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleWorkstationsWorkstationIamPolicy(Construct Scope, string Id, DataGoogleWorkstationsWorkstationIamPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicyConfig">DataGoogleWorkstationsWorkstationIamPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicyConfig">DataGoogleWorkstationsWorkstationIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleWorkstationsWorkstationIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleWorkstationsWorkstationIamPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleWorkstationsWorkstationIamPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleWorkstationsWorkstationIamPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleWorkstationsWorkstationIamPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleWorkstationsWorkstationIamPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleWorkstationsWorkstationIamPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleWorkstationsWorkstationIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/data-sources/google_workstations_workstation_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleWorkstationsWorkstationIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.policyData">PolicyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.workstationClusterIdInput">WorkstationClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.workstationConfigIdInput">WorkstationConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.workstationIdInput">WorkstationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.workstationClusterId">WorkstationClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.workstationConfigId">WorkstationConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.workstationId">WorkstationId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.policyData"></a>

```csharp
public string PolicyData { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `WorkstationClusterIdInput`<sup>Optional</sup> <a name="WorkstationClusterIdInput" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.workstationClusterIdInput"></a>

```csharp
public string WorkstationClusterIdInput { get; }
```

- *Type:* string

---

##### `WorkstationConfigIdInput`<sup>Optional</sup> <a name="WorkstationConfigIdInput" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.workstationConfigIdInput"></a>

```csharp
public string WorkstationConfigIdInput { get; }
```

- *Type:* string

---

##### `WorkstationIdInput`<sup>Optional</sup> <a name="WorkstationIdInput" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.workstationIdInput"></a>

```csharp
public string WorkstationIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `WorkstationClusterId`<sup>Required</sup> <a name="WorkstationClusterId" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.workstationClusterId"></a>

```csharp
public string WorkstationClusterId { get; }
```

- *Type:* string

---

##### `WorkstationConfigId`<sup>Required</sup> <a name="WorkstationConfigId" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.workstationConfigId"></a>

```csharp
public string WorkstationConfigId { get; }
```

- *Type:* string

---

##### `WorkstationId`<sup>Required</sup> <a name="WorkstationId" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.workstationId"></a>

```csharp
public string WorkstationId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleWorkstationsWorkstationIamPolicyConfig <a name="DataGoogleWorkstationsWorkstationIamPolicyConfig" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleWorkstationsWorkstationIamPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string WorkstationClusterId,
    string WorkstationConfigId,
    string WorkstationId,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicyConfig.property.workstationClusterId">WorkstationClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/data-sources/google_workstations_workstation_iam_policy#workstation_cluster_id DataGoogleWorkstationsWorkstationIamPolicy#workstation_cluster_id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicyConfig.property.workstationConfigId">WorkstationConfigId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/data-sources/google_workstations_workstation_iam_policy#workstation_config_id DataGoogleWorkstationsWorkstationIamPolicy#workstation_config_id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicyConfig.property.workstationId">WorkstationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/data-sources/google_workstations_workstation_iam_policy#workstation_id DataGoogleWorkstationsWorkstationIamPolicy#workstation_id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/data-sources/google_workstations_workstation_iam_policy#id DataGoogleWorkstationsWorkstationIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicyConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/data-sources/google_workstations_workstation_iam_policy#location DataGoogleWorkstationsWorkstationIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/data-sources/google_workstations_workstation_iam_policy#project DataGoogleWorkstationsWorkstationIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `WorkstationClusterId`<sup>Required</sup> <a name="WorkstationClusterId" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicyConfig.property.workstationClusterId"></a>

```csharp
public string WorkstationClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/data-sources/google_workstations_workstation_iam_policy#workstation_cluster_id DataGoogleWorkstationsWorkstationIamPolicy#workstation_cluster_id}.

---

##### `WorkstationConfigId`<sup>Required</sup> <a name="WorkstationConfigId" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicyConfig.property.workstationConfigId"></a>

```csharp
public string WorkstationConfigId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/data-sources/google_workstations_workstation_iam_policy#workstation_config_id DataGoogleWorkstationsWorkstationIamPolicy#workstation_config_id}.

---

##### `WorkstationId`<sup>Required</sup> <a name="WorkstationId" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicyConfig.property.workstationId"></a>

```csharp
public string WorkstationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/data-sources/google_workstations_workstation_iam_policy#workstation_id DataGoogleWorkstationsWorkstationIamPolicy#workstation_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/data-sources/google_workstations_workstation_iam_policy#id DataGoogleWorkstationsWorkstationIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicyConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/data-sources/google_workstations_workstation_iam_policy#location DataGoogleWorkstationsWorkstationIamPolicy#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationIamPolicy.DataGoogleWorkstationsWorkstationIamPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/data-sources/google_workstations_workstation_iam_policy#project DataGoogleWorkstationsWorkstationIamPolicy#project}.

---



