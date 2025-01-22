# `dataGoogleCloudbuildTrigger` Submodule <a name="`dataGoogleCloudbuildTrigger` Submodule" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudbuildTrigger <a name="DataGoogleCloudbuildTrigger" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/data-sources/google_cloudbuild_trigger google_cloudbuild_trigger}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTrigger(Construct Scope, string Id, DataGoogleCloudbuildTriggerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig">DataGoogleCloudbuildTriggerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig">DataGoogleCloudbuildTriggerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleCloudbuildTrigger resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleCloudbuildTrigger.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleCloudbuildTrigger.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleCloudbuildTrigger.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleCloudbuildTrigger.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleCloudbuildTrigger resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleCloudbuildTrigger to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleCloudbuildTrigger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/data-sources/google_cloudbuild_trigger#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudbuildTrigger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.approvalConfig">ApprovalConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList">DataGoogleCloudbuildTriggerApprovalConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.bitbucketServerTriggerConfig">BitbucketServerTriggerConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList">DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.buildAttribute">BuildAttribute</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList">DataGoogleCloudbuildTriggerBuildList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.disabled">Disabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.filename">Filename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.gitFileSource">GitFileSource</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList">DataGoogleCloudbuildTriggerGitFileSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.github">Github</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList">DataGoogleCloudbuildTriggerGithubList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.ignoredFiles">IgnoredFiles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.includeBuildLogs">IncludeBuildLogs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.includedFiles">IncludedFiles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.pubsubConfig">PubsubConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList">DataGoogleCloudbuildTriggerPubsubConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.repositoryEventConfig">RepositoryEventConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList">DataGoogleCloudbuildTriggerRepositoryEventConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.sourceToBuild">SourceToBuild</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList">DataGoogleCloudbuildTriggerSourceToBuildList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.substitutions">Substitutions</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.triggerTemplate">TriggerTemplate</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList">DataGoogleCloudbuildTriggerTriggerTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.webhookConfig">WebhookConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList">DataGoogleCloudbuildTriggerWebhookConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.triggerIdInput">TriggerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.triggerId">TriggerId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ApprovalConfig`<sup>Required</sup> <a name="ApprovalConfig" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.approvalConfig"></a>

```csharp
public DataGoogleCloudbuildTriggerApprovalConfigList ApprovalConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList">DataGoogleCloudbuildTriggerApprovalConfigList</a>

---

##### `BitbucketServerTriggerConfig`<sup>Required</sup> <a name="BitbucketServerTriggerConfig" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.bitbucketServerTriggerConfig"></a>

```csharp
public DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList BitbucketServerTriggerConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList">DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList</a>

---

##### `BuildAttribute`<sup>Required</sup> <a name="BuildAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.buildAttribute"></a>

```csharp
public DataGoogleCloudbuildTriggerBuildList BuildAttribute { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList">DataGoogleCloudbuildTriggerBuildList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.disabled"></a>

```csharp
public IResolvable Disabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.filename"></a>

```csharp
public string Filename { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `GitFileSource`<sup>Required</sup> <a name="GitFileSource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.gitFileSource"></a>

```csharp
public DataGoogleCloudbuildTriggerGitFileSourceList GitFileSource { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList">DataGoogleCloudbuildTriggerGitFileSourceList</a>

---

##### `Github`<sup>Required</sup> <a name="Github" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.github"></a>

```csharp
public DataGoogleCloudbuildTriggerGithubList Github { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList">DataGoogleCloudbuildTriggerGithubList</a>

---

##### `IgnoredFiles`<sup>Required</sup> <a name="IgnoredFiles" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.ignoredFiles"></a>

```csharp
public string[] IgnoredFiles { get; }
```

- *Type:* string[]

---

##### `IncludeBuildLogs`<sup>Required</sup> <a name="IncludeBuildLogs" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.includeBuildLogs"></a>

```csharp
public string IncludeBuildLogs { get; }
```

- *Type:* string

---

##### `IncludedFiles`<sup>Required</sup> <a name="IncludedFiles" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.includedFiles"></a>

```csharp
public string[] IncludedFiles { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PubsubConfig`<sup>Required</sup> <a name="PubsubConfig" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.pubsubConfig"></a>

```csharp
public DataGoogleCloudbuildTriggerPubsubConfigList PubsubConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList">DataGoogleCloudbuildTriggerPubsubConfigList</a>

---

##### `RepositoryEventConfig`<sup>Required</sup> <a name="RepositoryEventConfig" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.repositoryEventConfig"></a>

```csharp
public DataGoogleCloudbuildTriggerRepositoryEventConfigList RepositoryEventConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList">DataGoogleCloudbuildTriggerRepositoryEventConfigList</a>

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `SourceToBuild`<sup>Required</sup> <a name="SourceToBuild" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.sourceToBuild"></a>

```csharp
public DataGoogleCloudbuildTriggerSourceToBuildList SourceToBuild { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList">DataGoogleCloudbuildTriggerSourceToBuildList</a>

---

##### `Substitutions`<sup>Required</sup> <a name="Substitutions" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.substitutions"></a>

```csharp
public StringMap Substitutions { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `TriggerTemplate`<sup>Required</sup> <a name="TriggerTemplate" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.triggerTemplate"></a>

```csharp
public DataGoogleCloudbuildTriggerTriggerTemplateList TriggerTemplate { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList">DataGoogleCloudbuildTriggerTriggerTemplateList</a>

---

##### `WebhookConfig`<sup>Required</sup> <a name="WebhookConfig" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.webhookConfig"></a>

```csharp
public DataGoogleCloudbuildTriggerWebhookConfigList WebhookConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList">DataGoogleCloudbuildTriggerWebhookConfigList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TriggerIdInput`<sup>Optional</sup> <a name="TriggerIdInput" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.triggerIdInput"></a>

```csharp
public string TriggerIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `TriggerId`<sup>Required</sup> <a name="TriggerId" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.triggerId"></a>

```csharp
public string TriggerId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudbuildTriggerApprovalConfig <a name="DataGoogleCloudbuildTriggerApprovalConfig" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerApprovalConfig {

};
```


### DataGoogleCloudbuildTriggerBitbucketServerTriggerConfig <a name="DataGoogleCloudbuildTriggerBitbucketServerTriggerConfig" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBitbucketServerTriggerConfig {

};
```


### DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest <a name="DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest {

};
```


### DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPush <a name="DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPush" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPush"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPush.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPush {

};
```


### DataGoogleCloudbuildTriggerBuild <a name="DataGoogleCloudbuildTriggerBuild" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuild"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuild.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuild {

};
```


### DataGoogleCloudbuildTriggerBuildArtifacts <a name="DataGoogleCloudbuildTriggerBuildArtifacts" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifacts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildArtifacts {

};
```


### DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifacts <a name="DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifacts" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifacts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifacts {

};
```


### DataGoogleCloudbuildTriggerBuildArtifactsNpmPackages <a name="DataGoogleCloudbuildTriggerBuildArtifactsNpmPackages" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildArtifactsNpmPackages {

};
```


### DataGoogleCloudbuildTriggerBuildArtifactsObjects <a name="DataGoogleCloudbuildTriggerBuildArtifactsObjects" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjects.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildArtifactsObjects {

};
```


### DataGoogleCloudbuildTriggerBuildArtifactsObjectsTiming <a name="DataGoogleCloudbuildTriggerBuildArtifactsObjectsTiming" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTiming"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTiming.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildArtifactsObjectsTiming {

};
```


### DataGoogleCloudbuildTriggerBuildArtifactsPythonPackages <a name="DataGoogleCloudbuildTriggerBuildArtifactsPythonPackages" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildArtifactsPythonPackages {

};
```


### DataGoogleCloudbuildTriggerBuildAvailableSecrets <a name="DataGoogleCloudbuildTriggerBuildAvailableSecrets" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecrets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildAvailableSecrets {

};
```


### DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManager <a name="DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManager" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManager"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManager.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManager {

};
```


### DataGoogleCloudbuildTriggerBuildOptions <a name="DataGoogleCloudbuildTriggerBuildOptions" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildOptions {

};
```


### DataGoogleCloudbuildTriggerBuildOptionsVolumes <a name="DataGoogleCloudbuildTriggerBuildOptionsVolumes" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildOptionsVolumes {

};
```


### DataGoogleCloudbuildTriggerBuildSecret <a name="DataGoogleCloudbuildTriggerBuildSecret" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecret.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildSecret {

};
```


### DataGoogleCloudbuildTriggerBuildSource <a name="DataGoogleCloudbuildTriggerBuildSource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildSource {

};
```


### DataGoogleCloudbuildTriggerBuildSourceRepoSource <a name="DataGoogleCloudbuildTriggerBuildSourceRepoSource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildSourceRepoSource {

};
```


### DataGoogleCloudbuildTriggerBuildSourceStorageSource <a name="DataGoogleCloudbuildTriggerBuildSourceStorageSource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildSourceStorageSource {

};
```


### DataGoogleCloudbuildTriggerBuildStep <a name="DataGoogleCloudbuildTriggerBuildStep" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStep.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildStep {

};
```


### DataGoogleCloudbuildTriggerBuildStepVolumes <a name="DataGoogleCloudbuildTriggerBuildStepVolumes" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildStepVolumes {

};
```


### DataGoogleCloudbuildTriggerConfig <a name="DataGoogleCloudbuildTriggerConfig" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string TriggerId,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.location">Location</a></code> | <code>string</code> | The [Cloud Build location](https://cloud.google.com/build/docs/locations) for the trigger. If not specified, "global" is used. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.triggerId">TriggerId</a></code> | <code>string</code> | The unique identifier for the trigger. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/data-sources/google_cloudbuild_trigger#id DataGoogleCloudbuildTrigger#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/data-sources/google_cloudbuild_trigger#project DataGoogleCloudbuildTrigger#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The [Cloud Build location](https://cloud.google.com/build/docs/locations) for the trigger. If not specified, "global" is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/data-sources/google_cloudbuild_trigger#location DataGoogleCloudbuildTrigger#location}

---

##### `TriggerId`<sup>Required</sup> <a name="TriggerId" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.triggerId"></a>

```csharp
public string TriggerId { get; set; }
```

- *Type:* string

The unique identifier for the trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/data-sources/google_cloudbuild_trigger#trigger_id DataGoogleCloudbuildTrigger#trigger_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/data-sources/google_cloudbuild_trigger#id DataGoogleCloudbuildTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/data-sources/google_cloudbuild_trigger#project DataGoogleCloudbuildTrigger#project}.

---

### DataGoogleCloudbuildTriggerGitFileSource <a name="DataGoogleCloudbuildTriggerGitFileSource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerGitFileSource {

};
```


### DataGoogleCloudbuildTriggerGithub <a name="DataGoogleCloudbuildTriggerGithub" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithub.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerGithub {

};
```


### DataGoogleCloudbuildTriggerGithubPullRequest <a name="DataGoogleCloudbuildTriggerGithubPullRequest" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerGithubPullRequest {

};
```


### DataGoogleCloudbuildTriggerGithubPush <a name="DataGoogleCloudbuildTriggerGithubPush" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPush"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPush.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerGithubPush {

};
```


### DataGoogleCloudbuildTriggerPubsubConfig <a name="DataGoogleCloudbuildTriggerPubsubConfig" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerPubsubConfig {

};
```


### DataGoogleCloudbuildTriggerRepositoryEventConfig <a name="DataGoogleCloudbuildTriggerRepositoryEventConfig" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerRepositoryEventConfig {

};
```


### DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequest <a name="DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequest" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequest {

};
```


### DataGoogleCloudbuildTriggerRepositoryEventConfigPush <a name="DataGoogleCloudbuildTriggerRepositoryEventConfigPush" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPush"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPush.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerRepositoryEventConfigPush {

};
```


### DataGoogleCloudbuildTriggerSourceToBuild <a name="DataGoogleCloudbuildTriggerSourceToBuild" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuild"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuild.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerSourceToBuild {

};
```


### DataGoogleCloudbuildTriggerTriggerTemplate <a name="DataGoogleCloudbuildTriggerTriggerTemplate" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerTriggerTemplate {

};
```


### DataGoogleCloudbuildTriggerWebhookConfig <a name="DataGoogleCloudbuildTriggerWebhookConfig" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerWebhookConfig {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudbuildTriggerApprovalConfigList <a name="DataGoogleCloudbuildTriggerApprovalConfigList" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerApprovalConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.get"></a>

```csharp
private DataGoogleCloudbuildTriggerApprovalConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerApprovalConfigOutputReference <a name="DataGoogleCloudbuildTriggerApprovalConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerApprovalConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.property.approvalRequired">ApprovalRequired</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfig">DataGoogleCloudbuildTriggerApprovalConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApprovalRequired`<sup>Required</sup> <a name="ApprovalRequired" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.property.approvalRequired"></a>

```csharp
public IResolvable ApprovalRequired { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudbuildTriggerApprovalConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfig">DataGoogleCloudbuildTriggerApprovalConfig</a>

---


### DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList <a name="DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.get"></a>

```csharp
private DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference <a name="DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.bitbucketServerConfigResource">BitbucketServerConfigResource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.projectKey">ProjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.pullRequest">PullRequest</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList">DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.push">Push</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList">DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.repoSlug">RepoSlug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfig">DataGoogleCloudbuildTriggerBitbucketServerTriggerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BitbucketServerConfigResource`<sup>Required</sup> <a name="BitbucketServerConfigResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.bitbucketServerConfigResource"></a>

```csharp
public string BitbucketServerConfigResource { get; }
```

- *Type:* string

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.projectKey"></a>

```csharp
public string ProjectKey { get; }
```

- *Type:* string

---

##### `PullRequest`<sup>Required</sup> <a name="PullRequest" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.pullRequest"></a>

```csharp
public DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList PullRequest { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList">DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList</a>

---

##### `Push`<sup>Required</sup> <a name="Push" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.push"></a>

```csharp
public DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList Push { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList">DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList</a>

---

##### `RepoSlug`<sup>Required</sup> <a name="RepoSlug" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.repoSlug"></a>

```csharp
public string RepoSlug { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudbuildTriggerBitbucketServerTriggerConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfig">DataGoogleCloudbuildTriggerBitbucketServerTriggerConfig</a>

---


### DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList <a name="DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.get"></a>

```csharp
private DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference <a name="DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.commentControl">CommentControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.invertRegex">InvertRegex</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest">DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `CommentControl`<sup>Required</sup> <a name="CommentControl" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.commentControl"></a>

```csharp
public string CommentControl { get; }
```

- *Type:* string

---

##### `InvertRegex`<sup>Required</sup> <a name="InvertRegex" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.invertRegex"></a>

```csharp
public IResolvable InvertRegex { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest">DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest</a>

---


### DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList <a name="DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.get"></a>

```csharp
private DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference <a name="DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.invertRegex">InvertRegex</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPush">DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPush</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `InvertRegex`<sup>Required</sup> <a name="InvertRegex" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.invertRegex"></a>

```csharp
public IResolvable InvertRegex { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPush InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPush">DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPush</a>

---


### DataGoogleCloudbuildTriggerBuildArtifactsList <a name="DataGoogleCloudbuildTriggerBuildArtifactsList" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildArtifactsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.get"></a>

```csharp
private DataGoogleCloudbuildTriggerBuildArtifactsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList <a name="DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.get"></a>

```csharp
private DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference <a name="DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.artifactId">ArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifacts">DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.artifactId"></a>

```csharp
public string ArtifactId { get; }
```

- *Type:* string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifacts InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifacts">DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifacts</a>

---


### DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList <a name="DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.get"></a>

```csharp
private DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference <a name="DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.packagePath">PackagePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackages">DataGoogleCloudbuildTriggerBuildArtifactsNpmPackages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PackagePath`<sup>Required</sup> <a name="PackagePath" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.packagePath"></a>

```csharp
public string PackagePath { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudbuildTriggerBuildArtifactsNpmPackages InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackages">DataGoogleCloudbuildTriggerBuildArtifactsNpmPackages</a>

---


### DataGoogleCloudbuildTriggerBuildArtifactsObjectsList <a name="DataGoogleCloudbuildTriggerBuildArtifactsObjectsList" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildArtifactsObjectsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.get"></a>

```csharp
private DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference <a name="DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.paths">Paths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.timing">Timing</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList">DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjects">DataGoogleCloudbuildTriggerBuildArtifactsObjects</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.paths"></a>

```csharp
public string[] Paths { get; }
```

- *Type:* string[]

---

##### `Timing`<sup>Required</sup> <a name="Timing" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.timing"></a>

```csharp
public DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList Timing { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList">DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudbuildTriggerBuildArtifactsObjects InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjects">DataGoogleCloudbuildTriggerBuildArtifactsObjects</a>

---


### DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList <a name="DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.get"></a>

```csharp
private DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference <a name="DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTiming">DataGoogleCloudbuildTriggerBuildArtifactsObjectsTiming</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudbuildTriggerBuildArtifactsObjectsTiming InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTiming">DataGoogleCloudbuildTriggerBuildArtifactsObjectsTiming</a>

---


### DataGoogleCloudbuildTriggerBuildArtifactsOutputReference <a name="DataGoogleCloudbuildTriggerBuildArtifactsOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildArtifactsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.images">Images</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.mavenArtifacts">MavenArtifacts</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList">DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.npmPackages">NpmPackages</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList">DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.objects">Objects</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList">DataGoogleCloudbuildTriggerBuildArtifactsObjectsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.pythonPackages">PythonPackages</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList">DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifacts">DataGoogleCloudbuildTriggerBuildArtifacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Images`<sup>Required</sup> <a name="Images" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.images"></a>

```csharp
public string[] Images { get; }
```

- *Type:* string[]

---

##### `MavenArtifacts`<sup>Required</sup> <a name="MavenArtifacts" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.mavenArtifacts"></a>

```csharp
public DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList MavenArtifacts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList">DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList</a>

---

##### `NpmPackages`<sup>Required</sup> <a name="NpmPackages" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.npmPackages"></a>

```csharp
public DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList NpmPackages { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList">DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList</a>

---

##### `Objects`<sup>Required</sup> <a name="Objects" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.objects"></a>

```csharp
public DataGoogleCloudbuildTriggerBuildArtifactsObjectsList Objects { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList">DataGoogleCloudbuildTriggerBuildArtifactsObjectsList</a>

---

##### `PythonPackages`<sup>Required</sup> <a name="PythonPackages" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.pythonPackages"></a>

```csharp
public DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList PythonPackages { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList">DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudbuildTriggerBuildArtifacts InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifacts">DataGoogleCloudbuildTriggerBuildArtifacts</a>

---


### DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList <a name="DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.get"></a>

```csharp
private DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference <a name="DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.paths">Paths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackages">DataGoogleCloudbuildTriggerBuildArtifactsPythonPackages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.paths"></a>

```csharp
public string[] Paths { get; }
```

- *Type:* string[]

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudbuildTriggerBuildArtifactsPythonPackages InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackages">DataGoogleCloudbuildTriggerBuildArtifactsPythonPackages</a>

---


### DataGoogleCloudbuildTriggerBuildAvailableSecretsList <a name="DataGoogleCloudbuildTriggerBuildAvailableSecretsList" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildAvailableSecretsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.get"></a>

```csharp
private DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference <a name="DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.property.secretManager">SecretManager</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList">DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecrets">DataGoogleCloudbuildTriggerBuildAvailableSecrets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretManager`<sup>Required</sup> <a name="SecretManager" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.property.secretManager"></a>

```csharp
public DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList SecretManager { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList">DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudbuildTriggerBuildAvailableSecrets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecrets">DataGoogleCloudbuildTriggerBuildAvailableSecrets</a>

---


### DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList <a name="DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.get"></a>

```csharp
private DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference <a name="DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.env">Env</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.versionName">VersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManager">DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManager</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.env"></a>

```csharp
public string Env { get; }
```

- *Type:* string

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.versionName"></a>

```csharp
public string VersionName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManager InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManager">DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManager</a>

---


### DataGoogleCloudbuildTriggerBuildList <a name="DataGoogleCloudbuildTriggerBuildList" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.get"></a>

```csharp
private DataGoogleCloudbuildTriggerBuildOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerBuildOptionsList <a name="DataGoogleCloudbuildTriggerBuildOptionsList" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.get"></a>

```csharp
private DataGoogleCloudbuildTriggerBuildOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerBuildOptionsOutputReference <a name="DataGoogleCloudbuildTriggerBuildOptionsOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.dynamicSubstitutions">DynamicSubstitutions</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.env">Env</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.logging">Logging</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.logStreamingOption">LogStreamingOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.machineType">MachineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.requestedVerifyOption">RequestedVerifyOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.secretEnv">SecretEnv</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.sourceProvenanceHash">SourceProvenanceHash</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.substitutionOption">SubstitutionOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.volumes">Volumes</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList">DataGoogleCloudbuildTriggerBuildOptionsVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.workerPool">WorkerPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptions">DataGoogleCloudbuildTriggerBuildOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.diskSizeGb"></a>

```csharp
public double DiskSizeGb { get; }
```

- *Type:* double

---

##### `DynamicSubstitutions`<sup>Required</sup> <a name="DynamicSubstitutions" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.dynamicSubstitutions"></a>

```csharp
public IResolvable DynamicSubstitutions { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.env"></a>

```csharp
public string[] Env { get; }
```

- *Type:* string[]

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.logging"></a>

```csharp
public string Logging { get; }
```

- *Type:* string

---

##### `LogStreamingOption`<sup>Required</sup> <a name="LogStreamingOption" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.logStreamingOption"></a>

```csharp
public string LogStreamingOption { get; }
```

- *Type:* string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.machineType"></a>

```csharp
public string MachineType { get; }
```

- *Type:* string

---

##### `RequestedVerifyOption`<sup>Required</sup> <a name="RequestedVerifyOption" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.requestedVerifyOption"></a>

```csharp
public string RequestedVerifyOption { get; }
```

- *Type:* string

---

##### `SecretEnv`<sup>Required</sup> <a name="SecretEnv" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.secretEnv"></a>

```csharp
public string[] SecretEnv { get; }
```

- *Type:* string[]

---

##### `SourceProvenanceHash`<sup>Required</sup> <a name="SourceProvenanceHash" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.sourceProvenanceHash"></a>

```csharp
public string[] SourceProvenanceHash { get; }
```

- *Type:* string[]

---

##### `SubstitutionOption`<sup>Required</sup> <a name="SubstitutionOption" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.substitutionOption"></a>

```csharp
public string SubstitutionOption { get; }
```

- *Type:* string

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.volumes"></a>

```csharp
public DataGoogleCloudbuildTriggerBuildOptionsVolumesList Volumes { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList">DataGoogleCloudbuildTriggerBuildOptionsVolumesList</a>

---

##### `WorkerPool`<sup>Required</sup> <a name="WorkerPool" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.workerPool"></a>

```csharp
public string WorkerPool { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudbuildTriggerBuildOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptions">DataGoogleCloudbuildTriggerBuildOptions</a>

---


### DataGoogleCloudbuildTriggerBuildOptionsVolumesList <a name="DataGoogleCloudbuildTriggerBuildOptionsVolumesList" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildOptionsVolumesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.get"></a>

```csharp
private DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference <a name="DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumes">DataGoogleCloudbuildTriggerBuildOptionsVolumes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudbuildTriggerBuildOptionsVolumes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumes">DataGoogleCloudbuildTriggerBuildOptionsVolumes</a>

---


### DataGoogleCloudbuildTriggerBuildOutputReference <a name="DataGoogleCloudbuildTriggerBuildOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.artifacts">Artifacts</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList">DataGoogleCloudbuildTriggerBuildArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.availableSecrets">AvailableSecrets</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList">DataGoogleCloudbuildTriggerBuildAvailableSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.images">Images</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.logsBucket">LogsBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.options">Options</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList">DataGoogleCloudbuildTriggerBuildOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.queueTtl">QueueTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.secret">Secret</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList">DataGoogleCloudbuildTriggerBuildSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.source">Source</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList">DataGoogleCloudbuildTriggerBuildSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.step">Step</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList">DataGoogleCloudbuildTriggerBuildStepList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.substitutions">Substitutions</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.timeout">Timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuild">DataGoogleCloudbuildTriggerBuild</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Artifacts`<sup>Required</sup> <a name="Artifacts" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.artifacts"></a>

```csharp
public DataGoogleCloudbuildTriggerBuildArtifactsList Artifacts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList">DataGoogleCloudbuildTriggerBuildArtifactsList</a>

---

##### `AvailableSecrets`<sup>Required</sup> <a name="AvailableSecrets" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.availableSecrets"></a>

```csharp
public DataGoogleCloudbuildTriggerBuildAvailableSecretsList AvailableSecrets { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList">DataGoogleCloudbuildTriggerBuildAvailableSecretsList</a>

---

##### `Images`<sup>Required</sup> <a name="Images" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.images"></a>

```csharp
public string[] Images { get; }
```

- *Type:* string[]

---

##### `LogsBucket`<sup>Required</sup> <a name="LogsBucket" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.logsBucket"></a>

```csharp
public string LogsBucket { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.options"></a>

```csharp
public DataGoogleCloudbuildTriggerBuildOptionsList Options { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList">DataGoogleCloudbuildTriggerBuildOptionsList</a>

---

##### `QueueTtl`<sup>Required</sup> <a name="QueueTtl" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.queueTtl"></a>

```csharp
public string QueueTtl { get; }
```

- *Type:* string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.secret"></a>

```csharp
public DataGoogleCloudbuildTriggerBuildSecretList Secret { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList">DataGoogleCloudbuildTriggerBuildSecretList</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.source"></a>

```csharp
public DataGoogleCloudbuildTriggerBuildSourceList Source { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList">DataGoogleCloudbuildTriggerBuildSourceList</a>

---

##### `Step`<sup>Required</sup> <a name="Step" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.step"></a>

```csharp
public DataGoogleCloudbuildTriggerBuildStepList Step { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList">DataGoogleCloudbuildTriggerBuildStepList</a>

---

##### `Substitutions`<sup>Required</sup> <a name="Substitutions" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.substitutions"></a>

```csharp
public StringMap Substitutions { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.timeout"></a>

```csharp
public string Timeout { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudbuildTriggerBuild InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuild">DataGoogleCloudbuildTriggerBuild</a>

---


### DataGoogleCloudbuildTriggerBuildSecretList <a name="DataGoogleCloudbuildTriggerBuildSecretList" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildSecretList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.get"></a>

```csharp
private DataGoogleCloudbuildTriggerBuildSecretOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerBuildSecretOutputReference <a name="DataGoogleCloudbuildTriggerBuildSecretOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildSecretOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.property.secretEnv">SecretEnv</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecret">DataGoogleCloudbuildTriggerBuildSecret</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `SecretEnv`<sup>Required</sup> <a name="SecretEnv" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.property.secretEnv"></a>

```csharp
public StringMap SecretEnv { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudbuildTriggerBuildSecret InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecret">DataGoogleCloudbuildTriggerBuildSecret</a>

---


### DataGoogleCloudbuildTriggerBuildSourceList <a name="DataGoogleCloudbuildTriggerBuildSourceList" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.get"></a>

```csharp
private DataGoogleCloudbuildTriggerBuildSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerBuildSourceOutputReference <a name="DataGoogleCloudbuildTriggerBuildSourceOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.property.repoSource">RepoSource</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList">DataGoogleCloudbuildTriggerBuildSourceRepoSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.property.storageSource">StorageSource</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList">DataGoogleCloudbuildTriggerBuildSourceStorageSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSource">DataGoogleCloudbuildTriggerBuildSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RepoSource`<sup>Required</sup> <a name="RepoSource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.property.repoSource"></a>

```csharp
public DataGoogleCloudbuildTriggerBuildSourceRepoSourceList RepoSource { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList">DataGoogleCloudbuildTriggerBuildSourceRepoSourceList</a>

---

##### `StorageSource`<sup>Required</sup> <a name="StorageSource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.property.storageSource"></a>

```csharp
public DataGoogleCloudbuildTriggerBuildSourceStorageSourceList StorageSource { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList">DataGoogleCloudbuildTriggerBuildSourceStorageSourceList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudbuildTriggerBuildSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSource">DataGoogleCloudbuildTriggerBuildSource</a>

---


### DataGoogleCloudbuildTriggerBuildSourceRepoSourceList <a name="DataGoogleCloudbuildTriggerBuildSourceRepoSourceList" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildSourceRepoSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.get"></a>

```csharp
private DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference <a name="DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.branchName">BranchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.commitSha">CommitSha</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.dir">Dir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.invertRegex">InvertRegex</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.repoName">RepoName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.substitutions">Substitutions</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.tagName">TagName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSource">DataGoogleCloudbuildTriggerBuildSourceRepoSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BranchName`<sup>Required</sup> <a name="BranchName" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.branchName"></a>

```csharp
public string BranchName { get; }
```

- *Type:* string

---

##### `CommitSha`<sup>Required</sup> <a name="CommitSha" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.commitSha"></a>

```csharp
public string CommitSha { get; }
```

- *Type:* string

---

##### `Dir`<sup>Required</sup> <a name="Dir" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.dir"></a>

```csharp
public string Dir { get; }
```

- *Type:* string

---

##### `InvertRegex`<sup>Required</sup> <a name="InvertRegex" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.invertRegex"></a>

```csharp
public IResolvable InvertRegex { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `RepoName`<sup>Required</sup> <a name="RepoName" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.repoName"></a>

```csharp
public string RepoName { get; }
```

- *Type:* string

---

##### `Substitutions`<sup>Required</sup> <a name="Substitutions" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.substitutions"></a>

```csharp
public StringMap Substitutions { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TagName`<sup>Required</sup> <a name="TagName" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.tagName"></a>

```csharp
public string TagName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudbuildTriggerBuildSourceRepoSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSource">DataGoogleCloudbuildTriggerBuildSourceRepoSource</a>

---


### DataGoogleCloudbuildTriggerBuildSourceStorageSourceList <a name="DataGoogleCloudbuildTriggerBuildSourceStorageSourceList" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildSourceStorageSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.get"></a>

```csharp
private DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference <a name="DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.generation">Generation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSource">DataGoogleCloudbuildTriggerBuildSourceStorageSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.generation"></a>

```csharp
public string Generation { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudbuildTriggerBuildSourceStorageSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSource">DataGoogleCloudbuildTriggerBuildSourceStorageSource</a>

---


### DataGoogleCloudbuildTriggerBuildStepList <a name="DataGoogleCloudbuildTriggerBuildStepList" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildStepList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.get"></a>

```csharp
private DataGoogleCloudbuildTriggerBuildStepOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerBuildStepOutputReference <a name="DataGoogleCloudbuildTriggerBuildStepOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildStepOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.allowExitCodes">AllowExitCodes</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.allowFailure">AllowFailure</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.args">Args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.dir">Dir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.entrypoint">Entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.env">Env</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.script">Script</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.secretEnv">SecretEnv</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.timeout">Timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.timing">Timing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.volumes">Volumes</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList">DataGoogleCloudbuildTriggerBuildStepVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.waitFor">WaitFor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStep">DataGoogleCloudbuildTriggerBuildStep</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowExitCodes`<sup>Required</sup> <a name="AllowExitCodes" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.allowExitCodes"></a>

```csharp
public double[] AllowExitCodes { get; }
```

- *Type:* double[]

---

##### `AllowFailure`<sup>Required</sup> <a name="AllowFailure" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.allowFailure"></a>

```csharp
public IResolvable AllowFailure { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.args"></a>

```csharp
public string[] Args { get; }
```

- *Type:* string[]

---

##### `Dir`<sup>Required</sup> <a name="Dir" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.dir"></a>

```csharp
public string Dir { get; }
```

- *Type:* string

---

##### `Entrypoint`<sup>Required</sup> <a name="Entrypoint" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.entrypoint"></a>

```csharp
public string Entrypoint { get; }
```

- *Type:* string

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.env"></a>

```csharp
public string[] Env { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.script"></a>

```csharp
public string Script { get; }
```

- *Type:* string

---

##### `SecretEnv`<sup>Required</sup> <a name="SecretEnv" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.secretEnv"></a>

```csharp
public string[] SecretEnv { get; }
```

- *Type:* string[]

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.timeout"></a>

```csharp
public string Timeout { get; }
```

- *Type:* string

---

##### `Timing`<sup>Required</sup> <a name="Timing" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.timing"></a>

```csharp
public string Timing { get; }
```

- *Type:* string

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.volumes"></a>

```csharp
public DataGoogleCloudbuildTriggerBuildStepVolumesList Volumes { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList">DataGoogleCloudbuildTriggerBuildStepVolumesList</a>

---

##### `WaitFor`<sup>Required</sup> <a name="WaitFor" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.waitFor"></a>

```csharp
public string[] WaitFor { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudbuildTriggerBuildStep InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStep">DataGoogleCloudbuildTriggerBuildStep</a>

---


### DataGoogleCloudbuildTriggerBuildStepVolumesList <a name="DataGoogleCloudbuildTriggerBuildStepVolumesList" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildStepVolumesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.get"></a>

```csharp
private DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference <a name="DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumes">DataGoogleCloudbuildTriggerBuildStepVolumes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudbuildTriggerBuildStepVolumes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumes">DataGoogleCloudbuildTriggerBuildStepVolumes</a>

---


### DataGoogleCloudbuildTriggerGitFileSourceList <a name="DataGoogleCloudbuildTriggerGitFileSourceList" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerGitFileSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.get"></a>

```csharp
private DataGoogleCloudbuildTriggerGitFileSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerGitFileSourceOutputReference <a name="DataGoogleCloudbuildTriggerGitFileSourceOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerGitFileSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.bitbucketServerConfig">BitbucketServerConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.githubEnterpriseConfig">GithubEnterpriseConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.repoType">RepoType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.revision">Revision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSource">DataGoogleCloudbuildTriggerGitFileSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BitbucketServerConfig`<sup>Required</sup> <a name="BitbucketServerConfig" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.bitbucketServerConfig"></a>

```csharp
public string BitbucketServerConfig { get; }
```

- *Type:* string

---

##### `GithubEnterpriseConfig`<sup>Required</sup> <a name="GithubEnterpriseConfig" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.githubEnterpriseConfig"></a>

```csharp
public string GithubEnterpriseConfig { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `RepoType`<sup>Required</sup> <a name="RepoType" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.repoType"></a>

```csharp
public string RepoType { get; }
```

- *Type:* string

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.revision"></a>

```csharp
public string Revision { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudbuildTriggerGitFileSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSource">DataGoogleCloudbuildTriggerGitFileSource</a>

---


### DataGoogleCloudbuildTriggerGithubList <a name="DataGoogleCloudbuildTriggerGithubList" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerGithubList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.get"></a>

```csharp
private DataGoogleCloudbuildTriggerGithubOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerGithubOutputReference <a name="DataGoogleCloudbuildTriggerGithubOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerGithubOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.enterpriseConfigResourceName">EnterpriseConfigResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.pullRequest">PullRequest</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList">DataGoogleCloudbuildTriggerGithubPullRequestList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.push">Push</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList">DataGoogleCloudbuildTriggerGithubPushList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithub">DataGoogleCloudbuildTriggerGithub</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnterpriseConfigResourceName`<sup>Required</sup> <a name="EnterpriseConfigResourceName" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.enterpriseConfigResourceName"></a>

```csharp
public string EnterpriseConfigResourceName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `PullRequest`<sup>Required</sup> <a name="PullRequest" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.pullRequest"></a>

```csharp
public DataGoogleCloudbuildTriggerGithubPullRequestList PullRequest { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList">DataGoogleCloudbuildTriggerGithubPullRequestList</a>

---

##### `Push`<sup>Required</sup> <a name="Push" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.push"></a>

```csharp
public DataGoogleCloudbuildTriggerGithubPushList Push { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList">DataGoogleCloudbuildTriggerGithubPushList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudbuildTriggerGithub InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithub">DataGoogleCloudbuildTriggerGithub</a>

---


### DataGoogleCloudbuildTriggerGithubPullRequestList <a name="DataGoogleCloudbuildTriggerGithubPullRequestList" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerGithubPullRequestList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.get"></a>

```csharp
private DataGoogleCloudbuildTriggerGithubPullRequestOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerGithubPullRequestOutputReference <a name="DataGoogleCloudbuildTriggerGithubPullRequestOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerGithubPullRequestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.property.commentControl">CommentControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.property.invertRegex">InvertRegex</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequest">DataGoogleCloudbuildTriggerGithubPullRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `CommentControl`<sup>Required</sup> <a name="CommentControl" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.property.commentControl"></a>

```csharp
public string CommentControl { get; }
```

- *Type:* string

---

##### `InvertRegex`<sup>Required</sup> <a name="InvertRegex" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.property.invertRegex"></a>

```csharp
public IResolvable InvertRegex { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudbuildTriggerGithubPullRequest InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequest">DataGoogleCloudbuildTriggerGithubPullRequest</a>

---


### DataGoogleCloudbuildTriggerGithubPushList <a name="DataGoogleCloudbuildTriggerGithubPushList" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerGithubPushList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.get"></a>

```csharp
private DataGoogleCloudbuildTriggerGithubPushOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerGithubPushOutputReference <a name="DataGoogleCloudbuildTriggerGithubPushOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerGithubPushOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.property.invertRegex">InvertRegex</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPush">DataGoogleCloudbuildTriggerGithubPush</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `InvertRegex`<sup>Required</sup> <a name="InvertRegex" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.property.invertRegex"></a>

```csharp
public IResolvable InvertRegex { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudbuildTriggerGithubPush InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPush">DataGoogleCloudbuildTriggerGithubPush</a>

---


### DataGoogleCloudbuildTriggerPubsubConfigList <a name="DataGoogleCloudbuildTriggerPubsubConfigList" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerPubsubConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.get"></a>

```csharp
private DataGoogleCloudbuildTriggerPubsubConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerPubsubConfigOutputReference <a name="DataGoogleCloudbuildTriggerPubsubConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerPubsubConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.property.subscription">Subscription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.property.topic">Topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfig">DataGoogleCloudbuildTriggerPubsubConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Subscription`<sup>Required</sup> <a name="Subscription" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.property.subscription"></a>

```csharp
public string Subscription { get; }
```

- *Type:* string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.property.topic"></a>

```csharp
public string Topic { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudbuildTriggerPubsubConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfig">DataGoogleCloudbuildTriggerPubsubConfig</a>

---


### DataGoogleCloudbuildTriggerRepositoryEventConfigList <a name="DataGoogleCloudbuildTriggerRepositoryEventConfigList" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerRepositoryEventConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.get"></a>

```csharp
private DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference <a name="DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.pullRequest">PullRequest</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList">DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.push">Push</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList">DataGoogleCloudbuildTriggerRepositoryEventConfigPushList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfig">DataGoogleCloudbuildTriggerRepositoryEventConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PullRequest`<sup>Required</sup> <a name="PullRequest" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.pullRequest"></a>

```csharp
public DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList PullRequest { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList">DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList</a>

---

##### `Push`<sup>Required</sup> <a name="Push" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.push"></a>

```csharp
public DataGoogleCloudbuildTriggerRepositoryEventConfigPushList Push { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList">DataGoogleCloudbuildTriggerRepositoryEventConfigPushList</a>

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudbuildTriggerRepositoryEventConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfig">DataGoogleCloudbuildTriggerRepositoryEventConfig</a>

---


### DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList <a name="DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.get"></a>

```csharp
private DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference <a name="DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.commentControl">CommentControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.invertRegex">InvertRegex</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequest">DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `CommentControl`<sup>Required</sup> <a name="CommentControl" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.commentControl"></a>

```csharp
public string CommentControl { get; }
```

- *Type:* string

---

##### `InvertRegex`<sup>Required</sup> <a name="InvertRegex" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.invertRegex"></a>

```csharp
public IResolvable InvertRegex { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequest InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequest">DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequest</a>

---


### DataGoogleCloudbuildTriggerRepositoryEventConfigPushList <a name="DataGoogleCloudbuildTriggerRepositoryEventConfigPushList" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerRepositoryEventConfigPushList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.get"></a>

```csharp
private DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference <a name="DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.invertRegex">InvertRegex</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPush">DataGoogleCloudbuildTriggerRepositoryEventConfigPush</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `InvertRegex`<sup>Required</sup> <a name="InvertRegex" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.invertRegex"></a>

```csharp
public IResolvable InvertRegex { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudbuildTriggerRepositoryEventConfigPush InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPush">DataGoogleCloudbuildTriggerRepositoryEventConfigPush</a>

---


### DataGoogleCloudbuildTriggerSourceToBuildList <a name="DataGoogleCloudbuildTriggerSourceToBuildList" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerSourceToBuildList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.get"></a>

```csharp
private DataGoogleCloudbuildTriggerSourceToBuildOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerSourceToBuildOutputReference <a name="DataGoogleCloudbuildTriggerSourceToBuildOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerSourceToBuildOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.bitbucketServerConfig">BitbucketServerConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.githubEnterpriseConfig">GithubEnterpriseConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.repoType">RepoType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuild">DataGoogleCloudbuildTriggerSourceToBuild</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BitbucketServerConfig`<sup>Required</sup> <a name="BitbucketServerConfig" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.bitbucketServerConfig"></a>

```csharp
public string BitbucketServerConfig { get; }
```

- *Type:* string

---

##### `GithubEnterpriseConfig`<sup>Required</sup> <a name="GithubEnterpriseConfig" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.githubEnterpriseConfig"></a>

```csharp
public string GithubEnterpriseConfig { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `RepoType`<sup>Required</sup> <a name="RepoType" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.repoType"></a>

```csharp
public string RepoType { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudbuildTriggerSourceToBuild InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuild">DataGoogleCloudbuildTriggerSourceToBuild</a>

---


### DataGoogleCloudbuildTriggerTriggerTemplateList <a name="DataGoogleCloudbuildTriggerTriggerTemplateList" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerTriggerTemplateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.get"></a>

```csharp
private DataGoogleCloudbuildTriggerTriggerTemplateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerTriggerTemplateOutputReference <a name="DataGoogleCloudbuildTriggerTriggerTemplateOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerTriggerTemplateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.branchName">BranchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.commitSha">CommitSha</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.dir">Dir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.invertRegex">InvertRegex</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.repoName">RepoName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.tagName">TagName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplate">DataGoogleCloudbuildTriggerTriggerTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BranchName`<sup>Required</sup> <a name="BranchName" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.branchName"></a>

```csharp
public string BranchName { get; }
```

- *Type:* string

---

##### `CommitSha`<sup>Required</sup> <a name="CommitSha" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.commitSha"></a>

```csharp
public string CommitSha { get; }
```

- *Type:* string

---

##### `Dir`<sup>Required</sup> <a name="Dir" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.dir"></a>

```csharp
public string Dir { get; }
```

- *Type:* string

---

##### `InvertRegex`<sup>Required</sup> <a name="InvertRegex" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.invertRegex"></a>

```csharp
public IResolvable InvertRegex { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `RepoName`<sup>Required</sup> <a name="RepoName" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.repoName"></a>

```csharp
public string RepoName { get; }
```

- *Type:* string

---

##### `TagName`<sup>Required</sup> <a name="TagName" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.tagName"></a>

```csharp
public string TagName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudbuildTriggerTriggerTemplate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplate">DataGoogleCloudbuildTriggerTriggerTemplate</a>

---


### DataGoogleCloudbuildTriggerWebhookConfigList <a name="DataGoogleCloudbuildTriggerWebhookConfigList" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerWebhookConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.get"></a>

```csharp
private DataGoogleCloudbuildTriggerWebhookConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerWebhookConfigOutputReference <a name="DataGoogleCloudbuildTriggerWebhookConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleCloudbuildTriggerWebhookConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.property.secret">Secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfig">DataGoogleCloudbuildTriggerWebhookConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.property.secret"></a>

```csharp
public string Secret { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudbuildTriggerWebhookConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfig">DataGoogleCloudbuildTriggerWebhookConfig</a>

---



