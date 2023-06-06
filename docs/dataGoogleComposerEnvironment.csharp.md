# `data_google_composer_environment`

Refer to the Terraform Registory for docs: [`data_google_composer_environment`](https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/data-sources/google_composer_environment).

# `dataGoogleComposerEnvironment` Submodule <a name="`dataGoogleComposerEnvironment` Submodule" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComposerEnvironment <a name="DataGoogleComposerEnvironment" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/data-sources/google_composer_environment google_composer_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironment(Construct Scope, string Id, DataGoogleComposerEnvironmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig">DataGoogleComposerEnvironmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig">DataGoogleComposerEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleComposerEnvironment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleComposerEnvironment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleComposerEnvironment.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList">DataGoogleComposerEnvironmentConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.labels">Labels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.config"></a>

```csharp
public DataGoogleComposerEnvironmentConfigAList Config { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList">DataGoogleComposerEnvironmentConfigAList</a>

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.labels"></a>

```csharp
public StringMap Labels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComposerEnvironmentConfig <a name="DataGoogleComposerEnvironmentConfig" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Id = null,
    string Project = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.name">Name</a></code> | <code>string</code> | Name of the environment. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/data-sources/google_composer_environment#id DataGoogleComposerEnvironment#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.region">Region</a></code> | <code>string</code> | The location or Compute Engine region for the environment. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/data-sources/google_composer_environment#name DataGoogleComposerEnvironment#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/data-sources/google_composer_environment#id DataGoogleComposerEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/data-sources/google_composer_environment#project DataGoogleComposerEnvironment#project}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The location or Compute Engine region for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/data-sources/google_composer_environment#region DataGoogleComposerEnvironment#region}

---

### DataGoogleComposerEnvironmentConfigA <a name="DataGoogleComposerEnvironmentConfigA" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigA {

};
```


### DataGoogleComposerEnvironmentConfigDatabaseConfig <a name="DataGoogleComposerEnvironmentConfigDatabaseConfig" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigDatabaseConfig {

};
```


### DataGoogleComposerEnvironmentConfigEncryptionConfig <a name="DataGoogleComposerEnvironmentConfigEncryptionConfig" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigEncryptionConfig {

};
```


### DataGoogleComposerEnvironmentConfigMaintenanceWindow <a name="DataGoogleComposerEnvironmentConfigMaintenanceWindow" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigMaintenanceWindow {

};
```


### DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig <a name="DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig {

};
```


### DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks <a name="DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks {

};
```


### DataGoogleComposerEnvironmentConfigNodeConfig <a name="DataGoogleComposerEnvironmentConfigNodeConfig" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigNodeConfig {

};
```


### DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy <a name="DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy {

};
```


### DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfig <a name="DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfig" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfig {

};
```


### DataGoogleComposerEnvironmentConfigRecoveryConfig <a name="DataGoogleComposerEnvironmentConfigRecoveryConfig" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigRecoveryConfig {

};
```


### DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig <a name="DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig {

};
```


### DataGoogleComposerEnvironmentConfigSoftwareConfig <a name="DataGoogleComposerEnvironmentConfigSoftwareConfig" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigSoftwareConfig {

};
```


### DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration <a name="DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration {

};
```


### DataGoogleComposerEnvironmentConfigWebServerConfig <a name="DataGoogleComposerEnvironmentConfigWebServerConfig" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigWebServerConfig {

};
```


### DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControl <a name="DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControl" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControl {

};
```


### DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange <a name="DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange {

};
```


### DataGoogleComposerEnvironmentConfigWorkloadsConfig <a name="DataGoogleComposerEnvironmentConfigWorkloadsConfig" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigWorkloadsConfig {

};
```


### DataGoogleComposerEnvironmentConfigWorkloadsConfigScheduler <a name="DataGoogleComposerEnvironmentConfigWorkloadsConfigScheduler" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigScheduler"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigScheduler.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigWorkloadsConfigScheduler {

};
```


### DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggerer <a name="DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggerer" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggerer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggerer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggerer {

};
```


### DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServer <a name="DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServer" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServer {

};
```


### DataGoogleComposerEnvironmentConfigWorkloadsConfigWorker <a name="DataGoogleComposerEnvironmentConfigWorkloadsConfigWorker" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorker"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorker.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigWorkloadsConfigWorker {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComposerEnvironmentConfigAList <a name="DataGoogleComposerEnvironmentConfigAList" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigAList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.get"></a>

```csharp
private DataGoogleComposerEnvironmentConfigAOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComposerEnvironmentConfigAOutputReference <a name="DataGoogleComposerEnvironmentConfigAOutputReference" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.airflowUri">AirflowUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.dagGcsPrefix">DagGcsPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.databaseConfig">DatabaseConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList">DataGoogleComposerEnvironmentConfigDatabaseConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList">DataGoogleComposerEnvironmentConfigEncryptionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.environmentSize">EnvironmentSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.gkeCluster">GkeCluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList">DataGoogleComposerEnvironmentConfigMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.masterAuthorizedNetworksConfig">MasterAuthorizedNetworksConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList">DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.nodeConfig">NodeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList">DataGoogleComposerEnvironmentConfigNodeConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.nodeCount">NodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.privateEnvironmentConfig">PrivateEnvironmentConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList">DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.recoveryConfig">RecoveryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList">DataGoogleComposerEnvironmentConfigRecoveryConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.softwareConfig">SoftwareConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList">DataGoogleComposerEnvironmentConfigSoftwareConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.webServerConfig">WebServerConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList">DataGoogleComposerEnvironmentConfigWebServerConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.webServerNetworkAccessControl">WebServerNetworkAccessControl</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList">DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.workloadsConfig">WorkloadsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList">DataGoogleComposerEnvironmentConfigWorkloadsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigA">DataGoogleComposerEnvironmentConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AirflowUri`<sup>Required</sup> <a name="AirflowUri" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.airflowUri"></a>

```csharp
public string AirflowUri { get; }
```

- *Type:* string

---

##### `DagGcsPrefix`<sup>Required</sup> <a name="DagGcsPrefix" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.dagGcsPrefix"></a>

```csharp
public string DagGcsPrefix { get; }
```

- *Type:* string

---

##### `DatabaseConfig`<sup>Required</sup> <a name="DatabaseConfig" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.databaseConfig"></a>

```csharp
public DataGoogleComposerEnvironmentConfigDatabaseConfigList DatabaseConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList">DataGoogleComposerEnvironmentConfigDatabaseConfigList</a>

---

##### `EncryptionConfig`<sup>Required</sup> <a name="EncryptionConfig" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.encryptionConfig"></a>

```csharp
public DataGoogleComposerEnvironmentConfigEncryptionConfigList EncryptionConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList">DataGoogleComposerEnvironmentConfigEncryptionConfigList</a>

---

##### `EnvironmentSize`<sup>Required</sup> <a name="EnvironmentSize" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.environmentSize"></a>

```csharp
public string EnvironmentSize { get; }
```

- *Type:* string

---

##### `GkeCluster`<sup>Required</sup> <a name="GkeCluster" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.gkeCluster"></a>

```csharp
public string GkeCluster { get; }
```

- *Type:* string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.maintenanceWindow"></a>

```csharp
public DataGoogleComposerEnvironmentConfigMaintenanceWindowList MaintenanceWindow { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList">DataGoogleComposerEnvironmentConfigMaintenanceWindowList</a>

---

##### `MasterAuthorizedNetworksConfig`<sup>Required</sup> <a name="MasterAuthorizedNetworksConfig" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.masterAuthorizedNetworksConfig"></a>

```csharp
public DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList MasterAuthorizedNetworksConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList">DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList</a>

---

##### `NodeConfig`<sup>Required</sup> <a name="NodeConfig" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.nodeConfig"></a>

```csharp
public DataGoogleComposerEnvironmentConfigNodeConfigList NodeConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList">DataGoogleComposerEnvironmentConfigNodeConfigList</a>

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.nodeCount"></a>

```csharp
public double NodeCount { get; }
```

- *Type:* double

---

##### `PrivateEnvironmentConfig`<sup>Required</sup> <a name="PrivateEnvironmentConfig" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.privateEnvironmentConfig"></a>

```csharp
public DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList PrivateEnvironmentConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList">DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList</a>

---

##### `RecoveryConfig`<sup>Required</sup> <a name="RecoveryConfig" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.recoveryConfig"></a>

```csharp
public DataGoogleComposerEnvironmentConfigRecoveryConfigList RecoveryConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList">DataGoogleComposerEnvironmentConfigRecoveryConfigList</a>

---

##### `SoftwareConfig`<sup>Required</sup> <a name="SoftwareConfig" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.softwareConfig"></a>

```csharp
public DataGoogleComposerEnvironmentConfigSoftwareConfigList SoftwareConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList">DataGoogleComposerEnvironmentConfigSoftwareConfigList</a>

---

##### `WebServerConfig`<sup>Required</sup> <a name="WebServerConfig" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.webServerConfig"></a>

```csharp
public DataGoogleComposerEnvironmentConfigWebServerConfigList WebServerConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList">DataGoogleComposerEnvironmentConfigWebServerConfigList</a>

---

##### `WebServerNetworkAccessControl`<sup>Required</sup> <a name="WebServerNetworkAccessControl" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.webServerNetworkAccessControl"></a>

```csharp
public DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList WebServerNetworkAccessControl { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList">DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList</a>

---

##### `WorkloadsConfig`<sup>Required</sup> <a name="WorkloadsConfig" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.workloadsConfig"></a>

```csharp
public DataGoogleComposerEnvironmentConfigWorkloadsConfigList WorkloadsConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList">DataGoogleComposerEnvironmentConfigWorkloadsConfigList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigAOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComposerEnvironmentConfigA InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigA">DataGoogleComposerEnvironmentConfigA</a>

---


### DataGoogleComposerEnvironmentConfigDatabaseConfigList <a name="DataGoogleComposerEnvironmentConfigDatabaseConfigList" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigDatabaseConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.get"></a>

```csharp
private DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference <a name="DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.machineType">MachineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfig">DataGoogleComposerEnvironmentConfigDatabaseConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.machineType"></a>

```csharp
public string MachineType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComposerEnvironmentConfigDatabaseConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigDatabaseConfig">DataGoogleComposerEnvironmentConfigDatabaseConfig</a>

---


### DataGoogleComposerEnvironmentConfigEncryptionConfigList <a name="DataGoogleComposerEnvironmentConfigEncryptionConfigList" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigEncryptionConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.get"></a>

```csharp
private DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference <a name="DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfig">DataGoogleComposerEnvironmentConfigEncryptionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComposerEnvironmentConfigEncryptionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigEncryptionConfig">DataGoogleComposerEnvironmentConfigEncryptionConfig</a>

---


### DataGoogleComposerEnvironmentConfigMaintenanceWindowList <a name="DataGoogleComposerEnvironmentConfigMaintenanceWindowList" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigMaintenanceWindowList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.get"></a>

```csharp
private DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference <a name="DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.recurrence">Recurrence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindow">DataGoogleComposerEnvironmentConfigMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `Recurrence`<sup>Required</sup> <a name="Recurrence" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.recurrence"></a>

```csharp
public string Recurrence { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindowOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComposerEnvironmentConfigMaintenanceWindow InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMaintenanceWindow">DataGoogleComposerEnvironmentConfigMaintenanceWindow</a>

---


### DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList <a name="DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.get"></a>

```csharp
private DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference <a name="DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.cidrBlock">CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks">DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.cidrBlock"></a>

```csharp
public string CidrBlock { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks">DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks</a>

---


### DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList <a name="DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.get"></a>

```csharp
private DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference <a name="DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.cidrBlocks">CidrBlocks</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList">DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig">DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrBlocks`<sup>Required</sup> <a name="CidrBlocks" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.cidrBlocks"></a>

```csharp
public DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList CidrBlocks { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList">DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig">DataGoogleComposerEnvironmentConfigMasterAuthorizedNetworksConfig</a>

---


### DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList <a name="DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.get"></a>

```csharp
private DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference <a name="DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterIpv4CidrBlock">ClusterIpv4CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterSecondaryRangeName">ClusterSecondaryRangeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesIpv4CidrBlock">ServicesIpv4CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesSecondaryRangeName">ServicesSecondaryRangeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.useIpAliases">UseIpAliases</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy">DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterIpv4CidrBlock`<sup>Required</sup> <a name="ClusterIpv4CidrBlock" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterIpv4CidrBlock"></a>

```csharp
public string ClusterIpv4CidrBlock { get; }
```

- *Type:* string

---

##### `ClusterSecondaryRangeName`<sup>Required</sup> <a name="ClusterSecondaryRangeName" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.clusterSecondaryRangeName"></a>

```csharp
public string ClusterSecondaryRangeName { get; }
```

- *Type:* string

---

##### `ServicesIpv4CidrBlock`<sup>Required</sup> <a name="ServicesIpv4CidrBlock" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesIpv4CidrBlock"></a>

```csharp
public string ServicesIpv4CidrBlock { get; }
```

- *Type:* string

---

##### `ServicesSecondaryRangeName`<sup>Required</sup> <a name="ServicesSecondaryRangeName" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.servicesSecondaryRangeName"></a>

```csharp
public string ServicesSecondaryRangeName { get; }
```

- *Type:* string

---

##### `UseIpAliases`<sup>Required</sup> <a name="UseIpAliases" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.useIpAliases"></a>

```csharp
public IResolvable UseIpAliases { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy">DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicy</a>

---


### DataGoogleComposerEnvironmentConfigNodeConfigList <a name="DataGoogleComposerEnvironmentConfigNodeConfigList" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigNodeConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.get"></a>

```csharp
private DataGoogleComposerEnvironmentConfigNodeConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComposerEnvironmentConfigNodeConfigOutputReference <a name="DataGoogleComposerEnvironmentConfigNodeConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigNodeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.enableIpMasqAgent">EnableIpMasqAgent</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.ipAllocationPolicy">IpAllocationPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList">DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.machineType">MachineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.maxPodsPerNode">MaxPodsPerNode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.oauthScopes">OauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.subnetwork">Subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.zone">Zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfig">DataGoogleComposerEnvironmentConfigNodeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.diskSizeGb"></a>

```csharp
public double DiskSizeGb { get; }
```

- *Type:* double

---

##### `EnableIpMasqAgent`<sup>Required</sup> <a name="EnableIpMasqAgent" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.enableIpMasqAgent"></a>

```csharp
public IResolvable EnableIpMasqAgent { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IpAllocationPolicy`<sup>Required</sup> <a name="IpAllocationPolicy" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.ipAllocationPolicy"></a>

```csharp
public DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList IpAllocationPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList">DataGoogleComposerEnvironmentConfigNodeConfigIpAllocationPolicyList</a>

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.machineType"></a>

```csharp
public string MachineType { get; }
```

- *Type:* string

---

##### `MaxPodsPerNode`<sup>Required</sup> <a name="MaxPodsPerNode" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.maxPodsPerNode"></a>

```csharp
public double MaxPodsPerNode { get; }
```

- *Type:* double

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `OauthScopes`<sup>Required</sup> <a name="OauthScopes" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.oauthScopes"></a>

```csharp
public string[] OauthScopes { get; }
```

- *Type:* string[]

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.subnetwork"></a>

```csharp
public string Subnetwork { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComposerEnvironmentConfigNodeConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigNodeConfig">DataGoogleComposerEnvironmentConfigNodeConfig</a>

---


### DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList <a name="DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.get"></a>

```csharp
private DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference <a name="DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerConnectionSubnetwork">CloudComposerConnectionSubnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerNetworkIpv4CidrBlock">CloudComposerNetworkIpv4CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudSqlIpv4CidrBlock">CloudSqlIpv4CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivateEndpoint">EnablePrivateEndpoint</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivatelyUsedPublicIps">EnablePrivatelyUsedPublicIps</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.masterIpv4CidrBlock">MasterIpv4CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.webServerIpv4CidrBlock">WebServerIpv4CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfig">DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudComposerConnectionSubnetwork`<sup>Required</sup> <a name="CloudComposerConnectionSubnetwork" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerConnectionSubnetwork"></a>

```csharp
public string CloudComposerConnectionSubnetwork { get; }
```

- *Type:* string

---

##### `CloudComposerNetworkIpv4CidrBlock`<sup>Required</sup> <a name="CloudComposerNetworkIpv4CidrBlock" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudComposerNetworkIpv4CidrBlock"></a>

```csharp
public string CloudComposerNetworkIpv4CidrBlock { get; }
```

- *Type:* string

---

##### `CloudSqlIpv4CidrBlock`<sup>Required</sup> <a name="CloudSqlIpv4CidrBlock" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.cloudSqlIpv4CidrBlock"></a>

```csharp
public string CloudSqlIpv4CidrBlock { get; }
```

- *Type:* string

---

##### `EnablePrivateEndpoint`<sup>Required</sup> <a name="EnablePrivateEndpoint" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivateEndpoint"></a>

```csharp
public IResolvable EnablePrivateEndpoint { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EnablePrivatelyUsedPublicIps`<sup>Required</sup> <a name="EnablePrivatelyUsedPublicIps" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.enablePrivatelyUsedPublicIps"></a>

```csharp
public IResolvable EnablePrivatelyUsedPublicIps { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MasterIpv4CidrBlock`<sup>Required</sup> <a name="MasterIpv4CidrBlock" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.masterIpv4CidrBlock"></a>

```csharp
public string MasterIpv4CidrBlock { get; }
```

- *Type:* string

---

##### `WebServerIpv4CidrBlock`<sup>Required</sup> <a name="WebServerIpv4CidrBlock" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.webServerIpv4CidrBlock"></a>

```csharp
public string WebServerIpv4CidrBlock { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfig">DataGoogleComposerEnvironmentConfigPrivateEnvironmentConfig</a>

---


### DataGoogleComposerEnvironmentConfigRecoveryConfigList <a name="DataGoogleComposerEnvironmentConfigRecoveryConfigList" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigRecoveryConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.get"></a>

```csharp
private DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference <a name="DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.scheduledSnapshotsConfig">ScheduledSnapshotsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList">DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfig">DataGoogleComposerEnvironmentConfigRecoveryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScheduledSnapshotsConfig`<sup>Required</sup> <a name="ScheduledSnapshotsConfig" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.scheduledSnapshotsConfig"></a>

```csharp
public DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList ScheduledSnapshotsConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList">DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComposerEnvironmentConfigRecoveryConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfig">DataGoogleComposerEnvironmentConfigRecoveryConfig</a>

---


### DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList <a name="DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.get"></a>

```csharp
private DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference <a name="DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotCreationSchedule">SnapshotCreationSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotLocation">SnapshotLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SnapshotCreationSchedule`<sup>Required</sup> <a name="SnapshotCreationSchedule" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotCreationSchedule"></a>

```csharp
public string SnapshotCreationSchedule { get; }
```

- *Type:* string

---

##### `SnapshotLocation`<sup>Required</sup> <a name="SnapshotLocation" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.snapshotLocation"></a>

```csharp
public string SnapshotLocation { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig">DataGoogleComposerEnvironmentConfigRecoveryConfigScheduledSnapshotsConfig</a>

---


### DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList <a name="DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.get"></a>

```csharp
private DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference <a name="DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration">DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration">DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegration</a>

---


### DataGoogleComposerEnvironmentConfigSoftwareConfigList <a name="DataGoogleComposerEnvironmentConfigSoftwareConfigList" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigSoftwareConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.get"></a>

```csharp
private DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference <a name="DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.airflowConfigOverrides">AirflowConfigOverrides</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.cloudDataLineageIntegration">CloudDataLineageIntegration</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList">DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.envVariables">EnvVariables</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.imageVersion">ImageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.pypiPackages">PypiPackages</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.pythonVersion">PythonVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.schedulerCount">SchedulerCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfig">DataGoogleComposerEnvironmentConfigSoftwareConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AirflowConfigOverrides`<sup>Required</sup> <a name="AirflowConfigOverrides" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.airflowConfigOverrides"></a>

```csharp
public StringMap AirflowConfigOverrides { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `CloudDataLineageIntegration`<sup>Required</sup> <a name="CloudDataLineageIntegration" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.cloudDataLineageIntegration"></a>

```csharp
public DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList CloudDataLineageIntegration { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList">DataGoogleComposerEnvironmentConfigSoftwareConfigCloudDataLineageIntegrationList</a>

---

##### `EnvVariables`<sup>Required</sup> <a name="EnvVariables" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.envVariables"></a>

```csharp
public StringMap EnvVariables { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ImageVersion`<sup>Required</sup> <a name="ImageVersion" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.imageVersion"></a>

```csharp
public string ImageVersion { get; }
```

- *Type:* string

---

##### `PypiPackages`<sup>Required</sup> <a name="PypiPackages" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.pypiPackages"></a>

```csharp
public StringMap PypiPackages { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `PythonVersion`<sup>Required</sup> <a name="PythonVersion" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.pythonVersion"></a>

```csharp
public string PythonVersion { get; }
```

- *Type:* string

---

##### `SchedulerCount`<sup>Required</sup> <a name="SchedulerCount" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.schedulerCount"></a>

```csharp
public double SchedulerCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComposerEnvironmentConfigSoftwareConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigSoftwareConfig">DataGoogleComposerEnvironmentConfigSoftwareConfig</a>

---


### DataGoogleComposerEnvironmentConfigWebServerConfigList <a name="DataGoogleComposerEnvironmentConfigWebServerConfigList" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigWebServerConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.get"></a>

```csharp
private DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference <a name="DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.machineType">MachineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfig">DataGoogleComposerEnvironmentConfigWebServerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.machineType"></a>

```csharp
public string MachineType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComposerEnvironmentConfigWebServerConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerConfig">DataGoogleComposerEnvironmentConfigWebServerConfig</a>

---


### DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList <a name="DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.get"></a>

```csharp
private DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference <a name="DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange">DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange">DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange</a>

---


### DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList <a name="DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.get"></a>

```csharp
private DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference <a name="DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.allowedIpRange">AllowedIpRange</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList">DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControl">DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedIpRange`<sup>Required</sup> <a name="AllowedIpRange" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.allowedIpRange"></a>

```csharp
public DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList AllowedIpRange { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList">DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControl InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControl">DataGoogleComposerEnvironmentConfigWebServerNetworkAccessControl</a>

---


### DataGoogleComposerEnvironmentConfigWorkloadsConfigList <a name="DataGoogleComposerEnvironmentConfigWorkloadsConfigList" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigWorkloadsConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.get"></a>

```csharp
private DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference <a name="DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.scheduler">Scheduler</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList">DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.triggerer">Triggerer</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList">DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.webServer">WebServer</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList">DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.worker">Worker</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList">DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfig">DataGoogleComposerEnvironmentConfigWorkloadsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Scheduler`<sup>Required</sup> <a name="Scheduler" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.scheduler"></a>

```csharp
public DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList Scheduler { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList">DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList</a>

---

##### `Triggerer`<sup>Required</sup> <a name="Triggerer" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.triggerer"></a>

```csharp
public DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList Triggerer { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList">DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList</a>

---

##### `WebServer`<sup>Required</sup> <a name="WebServer" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.webServer"></a>

```csharp
public DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList WebServer { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList">DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList</a>

---

##### `Worker`<sup>Required</sup> <a name="Worker" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.worker"></a>

```csharp
public DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList Worker { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList">DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComposerEnvironmentConfigWorkloadsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfig">DataGoogleComposerEnvironmentConfigWorkloadsConfig</a>

---


### DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList <a name="DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.get"></a>

```csharp
private DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference <a name="DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.cpu">Cpu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.memoryGb">MemoryGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.storageGb">StorageGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigScheduler">DataGoogleComposerEnvironmentConfigWorkloadsConfigScheduler</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.cpu"></a>

```csharp
public double Cpu { get; }
```

- *Type:* double

---

##### `MemoryGb`<sup>Required</sup> <a name="MemoryGb" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.memoryGb"></a>

```csharp
public double MemoryGb { get; }
```

- *Type:* double

---

##### `StorageGb`<sup>Required</sup> <a name="StorageGb" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.storageGb"></a>

```csharp
public double StorageGb { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComposerEnvironmentConfigWorkloadsConfigScheduler InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigScheduler">DataGoogleComposerEnvironmentConfigWorkloadsConfigScheduler</a>

---


### DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList <a name="DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.get"></a>

```csharp
private DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference <a name="DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.cpu">Cpu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.memoryGb">MemoryGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggerer">DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggerer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.cpu"></a>

```csharp
public double Cpu { get; }
```

- *Type:* double

---

##### `MemoryGb`<sup>Required</sup> <a name="MemoryGb" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.memoryGb"></a>

```csharp
public double MemoryGb { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggererOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggerer InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggerer">DataGoogleComposerEnvironmentConfigWorkloadsConfigTriggerer</a>

---


### DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList <a name="DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.get"></a>

```csharp
private DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference <a name="DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.cpu">Cpu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.memoryGb">MemoryGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.storageGb">StorageGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServer">DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.cpu"></a>

```csharp
public double Cpu { get; }
```

- *Type:* double

---

##### `MemoryGb`<sup>Required</sup> <a name="MemoryGb" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.memoryGb"></a>

```csharp
public double MemoryGb { get; }
```

- *Type:* double

---

##### `StorageGb`<sup>Required</sup> <a name="StorageGb" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.storageGb"></a>

```csharp
public double StorageGb { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServer InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServer">DataGoogleComposerEnvironmentConfigWorkloadsConfigWebServer</a>

---


### DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList <a name="DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.get"></a>

```csharp
private DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference <a name="DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.cpu">Cpu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.maxCount">MaxCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.memoryGb">MemoryGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.minCount">MinCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.storageGb">StorageGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorker">DataGoogleComposerEnvironmentConfigWorkloadsConfigWorker</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.cpu"></a>

```csharp
public double Cpu { get; }
```

- *Type:* double

---

##### `MaxCount`<sup>Required</sup> <a name="MaxCount" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.maxCount"></a>

```csharp
public double MaxCount { get; }
```

- *Type:* double

---

##### `MemoryGb`<sup>Required</sup> <a name="MemoryGb" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.memoryGb"></a>

```csharp
public double MemoryGb { get; }
```

- *Type:* double

---

##### `MinCount`<sup>Required</sup> <a name="MinCount" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.minCount"></a>

```csharp
public double MinCount { get; }
```

- *Type:* double

---

##### `StorageGb`<sup>Required</sup> <a name="StorageGb" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.storageGb"></a>

```csharp
public double StorageGb { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComposerEnvironmentConfigWorkloadsConfigWorker InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComposerEnvironment.DataGoogleComposerEnvironmentConfigWorkloadsConfigWorker">DataGoogleComposerEnvironmentConfigWorkloadsConfigWorker</a>

---



