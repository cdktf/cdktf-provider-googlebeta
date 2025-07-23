# `dataGoogleIapWebRegionBackendServiceIamPolicy` Submodule <a name="`dataGoogleIapWebRegionBackendServiceIamPolicy` Submodule" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleIapWebRegionBackendServiceIamPolicy <a name="DataGoogleIapWebRegionBackendServiceIamPolicy" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/data-sources/google_iap_web_region_backend_service_iam_policy google_iap_web_region_backend_service_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleIapWebRegionBackendServiceIamPolicy(Construct Scope, string Id, DataGoogleIapWebRegionBackendServiceIamPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig">DataGoogleIapWebRegionBackendServiceIamPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig">DataGoogleIapWebRegionBackendServiceIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleIapWebRegionBackendServiceIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleIapWebRegionBackendServiceIamPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleIapWebRegionBackendServiceIamPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleIapWebRegionBackendServiceIamPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleIapWebRegionBackendServiceIamPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleIapWebRegionBackendServiceIamPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleIapWebRegionBackendServiceIamPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleIapWebRegionBackendServiceIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/data-sources/google_iap_web_region_backend_service_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleIapWebRegionBackendServiceIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.policyData">PolicyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.webRegionBackendServiceInput">WebRegionBackendServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.webRegionBackendService">WebRegionBackendService</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.policyData"></a>

```csharp
public string PolicyData { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `WebRegionBackendServiceInput`<sup>Optional</sup> <a name="WebRegionBackendServiceInput" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.webRegionBackendServiceInput"></a>

```csharp
public string WebRegionBackendServiceInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `WebRegionBackendService`<sup>Required</sup> <a name="WebRegionBackendService" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.webRegionBackendService"></a>

```csharp
public string WebRegionBackendService { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleIapWebRegionBackendServiceIamPolicyConfig <a name="DataGoogleIapWebRegionBackendServiceIamPolicyConfig" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleIapWebRegionBackendServiceIamPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string WebRegionBackendService,
    string Id = null,
    string Project = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.webRegionBackendService">WebRegionBackendService</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/data-sources/google_iap_web_region_backend_service_iam_policy#web_region_backend_service DataGoogleIapWebRegionBackendServiceIamPolicy#web_region_backend_service}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/data-sources/google_iap_web_region_backend_service_iam_policy#id DataGoogleIapWebRegionBackendServiceIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/data-sources/google_iap_web_region_backend_service_iam_policy#project DataGoogleIapWebRegionBackendServiceIamPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/data-sources/google_iap_web_region_backend_service_iam_policy#region DataGoogleIapWebRegionBackendServiceIamPolicy#region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `WebRegionBackendService`<sup>Required</sup> <a name="WebRegionBackendService" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.webRegionBackendService"></a>

```csharp
public string WebRegionBackendService { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/data-sources/google_iap_web_region_backend_service_iam_policy#web_region_backend_service DataGoogleIapWebRegionBackendServiceIamPolicy#web_region_backend_service}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/data-sources/google_iap_web_region_backend_service_iam_policy#id DataGoogleIapWebRegionBackendServiceIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/data-sources/google_iap_web_region_backend_service_iam_policy#project DataGoogleIapWebRegionBackendServiceIamPolicy#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/data-sources/google_iap_web_region_backend_service_iam_policy#region DataGoogleIapWebRegionBackendServiceIamPolicy#region}.

---



