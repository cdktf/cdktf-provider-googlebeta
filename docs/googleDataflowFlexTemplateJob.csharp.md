# `google_dataflow_flex_template_job`

Refer to the Terraform Registory for docs: [`google_dataflow_flex_template_job`](https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_dataflow_flex_template_job).

# `googleDataflowFlexTemplateJob` Submodule <a name="`googleDataflowFlexTemplateJob` Submodule" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataflowFlexTemplateJob <a name="GoogleDataflowFlexTemplateJob" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_dataflow_flex_template_job google_dataflow_flex_template_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataflowFlexTemplateJob(Construct Scope, string Id, GoogleDataflowFlexTemplateJobConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig">GoogleDataflowFlexTemplateJobConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig">GoogleDataflowFlexTemplateJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetOnDelete">ResetOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetSkipWaitOnJobTermination">ResetSkipWaitOnJobTermination</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetOnDelete` <a name="ResetOnDelete" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetOnDelete"></a>

```csharp
private void ResetOnDelete()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSkipWaitOnJobTermination` <a name="ResetSkipWaitOnJobTermination" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.resetSkipWaitOnJobTermination"></a>

```csharp
private void ResetSkipWaitOnJobTermination()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDataflowFlexTemplateJob.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDataflowFlexTemplateJob.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDataflowFlexTemplateJob.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.jobId">JobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.containerSpecGcsPathInput">ContainerSpecGcsPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.onDeleteInput">OnDeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.skipWaitOnJobTerminationInput">SkipWaitOnJobTerminationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.containerSpecGcsPath">ContainerSpecGcsPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.onDelete">OnDelete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.skipWaitOnJobTermination">SkipWaitOnJobTermination</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.jobId"></a>

```csharp
public string JobId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `ContainerSpecGcsPathInput`<sup>Optional</sup> <a name="ContainerSpecGcsPathInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.containerSpecGcsPathInput"></a>

```csharp
public string ContainerSpecGcsPathInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OnDeleteInput`<sup>Optional</sup> <a name="OnDeleteInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.onDeleteInput"></a>

```csharp
public string OnDeleteInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SkipWaitOnJobTerminationInput`<sup>Optional</sup> <a name="SkipWaitOnJobTerminationInput" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.skipWaitOnJobTerminationInput"></a>

```csharp
public object SkipWaitOnJobTerminationInput { get; }
```

- *Type:* object

---

##### `ContainerSpecGcsPath`<sup>Required</sup> <a name="ContainerSpecGcsPath" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.containerSpecGcsPath"></a>

```csharp
public string ContainerSpecGcsPath { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OnDelete`<sup>Required</sup> <a name="OnDelete" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.onDelete"></a>

```csharp
public string OnDelete { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SkipWaitOnJobTermination`<sup>Required</sup> <a name="SkipWaitOnJobTermination" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.skipWaitOnJobTermination"></a>

```csharp
public object SkipWaitOnJobTermination { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJob.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataflowFlexTemplateJobConfig <a name="GoogleDataflowFlexTemplateJobConfig" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataflowFlexTemplateJobConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ContainerSpecGcsPath,
    string Name,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string OnDelete = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null,
    string Project = null,
    string Region = null,
    object SkipWaitOnJobTermination = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.containerSpecGcsPath">ContainerSpecGcsPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_dataflow_flex_template_job#container_spec_gcs_path GoogleDataflowFlexTemplateJob#container_spec_gcs_path}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_dataflow_flex_template_job#name GoogleDataflowFlexTemplateJob#name}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_dataflow_flex_template_job#id GoogleDataflowFlexTemplateJob#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_dataflow_flex_template_job#labels GoogleDataflowFlexTemplateJob#labels}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.onDelete">OnDelete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_dataflow_flex_template_job#on_delete GoogleDataflowFlexTemplateJob#on_delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_dataflow_flex_template_job#parameters GoogleDataflowFlexTemplateJob#parameters}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_dataflow_flex_template_job#project GoogleDataflowFlexTemplateJob#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.region">Region</a></code> | <code>string</code> | The region in which the created job should run. |
| <code><a href="#@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.skipWaitOnJobTermination">SkipWaitOnJobTermination</a></code> | <code>object</code> | If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from terraform state and moving on. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ContainerSpecGcsPath`<sup>Required</sup> <a name="ContainerSpecGcsPath" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.containerSpecGcsPath"></a>

```csharp
public string ContainerSpecGcsPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_dataflow_flex_template_job#container_spec_gcs_path GoogleDataflowFlexTemplateJob#container_spec_gcs_path}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_dataflow_flex_template_job#name GoogleDataflowFlexTemplateJob#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_dataflow_flex_template_job#id GoogleDataflowFlexTemplateJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_dataflow_flex_template_job#labels GoogleDataflowFlexTemplateJob#labels}.

---

##### `OnDelete`<sup>Optional</sup> <a name="OnDelete" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.onDelete"></a>

```csharp
public string OnDelete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_dataflow_flex_template_job#on_delete GoogleDataflowFlexTemplateJob#on_delete}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_dataflow_flex_template_job#parameters GoogleDataflowFlexTemplateJob#parameters}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_dataflow_flex_template_job#project GoogleDataflowFlexTemplateJob#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region in which the created job should run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_dataflow_flex_template_job#region GoogleDataflowFlexTemplateJob#region}

---

##### `SkipWaitOnJobTermination`<sup>Optional</sup> <a name="SkipWaitOnJobTermination" id="@cdktf/provider-google-beta.googleDataflowFlexTemplateJob.GoogleDataflowFlexTemplateJobConfig.property.skipWaitOnJobTermination"></a>

```csharp
public object SkipWaitOnJobTermination { get; set; }
```

- *Type:* object

If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from terraform state and moving on.

WARNING: this will lead to job name conflicts if you do not ensure that the job names are different, e.g. by embedding a release ID or by using a random_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_dataflow_flex_template_job#skip_wait_on_job_termination GoogleDataflowFlexTemplateJob#skip_wait_on_job_termination}

---



