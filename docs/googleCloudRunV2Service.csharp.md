# `google_cloud_run_v2_service`

Refer to the Terraform Registory for docs: [`google_cloud_run_v2_service`](https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service).

# `googleCloudRunV2Service` Submodule <a name="`googleCloudRunV2Service` Submodule" id="@cdktf/provider-google-beta.googleCloudRunV2Service"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudRunV2Service <a name="GoogleCloudRunV2Service" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service google_cloud_run_v2_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2Service(Construct Scope, string Id, GoogleCloudRunV2ServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig">GoogleCloudRunV2ServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig">GoogleCloudRunV2ServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.putBinaryAuthorization">PutBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.putTemplate">PutTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.putTraffic">PutTraffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetBinaryAuthorization">ResetBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetClient">ResetClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetClientVersion">ResetClientVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetIngress">ResetIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetLaunchStage">ResetLaunchStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetTraffic">ResetTraffic</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutBinaryAuthorization` <a name="PutBinaryAuthorization" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.putBinaryAuthorization"></a>

```csharp
private void PutBinaryAuthorization(GoogleCloudRunV2ServiceBinaryAuthorization Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.putBinaryAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorization">GoogleCloudRunV2ServiceBinaryAuthorization</a>

---

##### `PutTemplate` <a name="PutTemplate" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.putTemplate"></a>

```csharp
private void PutTemplate(GoogleCloudRunV2ServiceTemplate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.putTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate">GoogleCloudRunV2ServiceTemplate</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleCloudRunV2ServiceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeouts">GoogleCloudRunV2ServiceTimeouts</a>

---

##### `PutTraffic` <a name="PutTraffic" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.putTraffic"></a>

```csharp
private void PutTraffic(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.putTraffic.parameter.value"></a>

- *Type:* object

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetBinaryAuthorization` <a name="ResetBinaryAuthorization" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetBinaryAuthorization"></a>

```csharp
private void ResetBinaryAuthorization()
```

##### `ResetClient` <a name="ResetClient" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetClient"></a>

```csharp
private void ResetClient()
```

##### `ResetClientVersion` <a name="ResetClientVersion" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetClientVersion"></a>

```csharp
private void ResetClientVersion()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIngress` <a name="ResetIngress" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetIngress"></a>

```csharp
private void ResetIngress()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLaunchStage` <a name="ResetLaunchStage" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetLaunchStage"></a>

```csharp
private void ResetLaunchStage()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTraffic` <a name="ResetTraffic" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.resetTraffic"></a>

```csharp
private void ResetTraffic()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleCloudRunV2Service.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleCloudRunV2Service.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleCloudRunV2Service.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.binaryAuthorization">BinaryAuthorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference">GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList">GoogleCloudRunV2ServiceConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.generation">Generation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.latestCreatedRevision">LatestCreatedRevision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.latestReadyRevision">LatestReadyRevision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.observedGeneration">ObservedGeneration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.reconciling">Reconciling</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.template">Template</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference">GoogleCloudRunV2ServiceTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.terminalCondition">TerminalCondition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList">GoogleCloudRunV2ServiceTerminalConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference">GoogleCloudRunV2ServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.traffic">Traffic</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList">GoogleCloudRunV2ServiceTrafficList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.trafficStatuses">TrafficStatuses</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList">GoogleCloudRunV2ServiceTrafficStatusesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.binaryAuthorizationInput">BinaryAuthorizationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorization">GoogleCloudRunV2ServiceBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.clientInput">ClientInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.clientVersionInput">ClientVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.ingressInput">IngressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.launchStageInput">LaunchStageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.templateInput">TemplateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate">GoogleCloudRunV2ServiceTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.trafficInput">TrafficInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.client">Client</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.clientVersion">ClientVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.ingress">Ingress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.launchStage">LaunchStage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BinaryAuthorization`<sup>Required</sup> <a name="BinaryAuthorization" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.binaryAuthorization"></a>

```csharp
public GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference BinaryAuthorization { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference">GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference</a>

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.conditions"></a>

```csharp
public GoogleCloudRunV2ServiceConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList">GoogleCloudRunV2ServiceConditionsList</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.generation"></a>

```csharp
public string Generation { get; }
```

- *Type:* string

---

##### `LatestCreatedRevision`<sup>Required</sup> <a name="LatestCreatedRevision" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.latestCreatedRevision"></a>

```csharp
public string LatestCreatedRevision { get; }
```

- *Type:* string

---

##### `LatestReadyRevision`<sup>Required</sup> <a name="LatestReadyRevision" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.latestReadyRevision"></a>

```csharp
public string LatestReadyRevision { get; }
```

- *Type:* string

---

##### `ObservedGeneration`<sup>Required</sup> <a name="ObservedGeneration" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.observedGeneration"></a>

```csharp
public string ObservedGeneration { get; }
```

- *Type:* string

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.reconciling"></a>

```csharp
public IResolvable Reconciling { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Template`<sup>Required</sup> <a name="Template" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.template"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateOutputReference Template { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference">GoogleCloudRunV2ServiceTemplateOutputReference</a>

---

##### `TerminalCondition`<sup>Required</sup> <a name="TerminalCondition" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.terminalCondition"></a>

```csharp
public GoogleCloudRunV2ServiceTerminalConditionList TerminalCondition { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList">GoogleCloudRunV2ServiceTerminalConditionList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.timeouts"></a>

```csharp
public GoogleCloudRunV2ServiceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference">GoogleCloudRunV2ServiceTimeoutsOutputReference</a>

---

##### `Traffic`<sup>Required</sup> <a name="Traffic" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.traffic"></a>

```csharp
public GoogleCloudRunV2ServiceTrafficList Traffic { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList">GoogleCloudRunV2ServiceTrafficList</a>

---

##### `TrafficStatuses`<sup>Required</sup> <a name="TrafficStatuses" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.trafficStatuses"></a>

```csharp
public GoogleCloudRunV2ServiceTrafficStatusesList TrafficStatuses { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList">GoogleCloudRunV2ServiceTrafficStatusesList</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `BinaryAuthorizationInput`<sup>Optional</sup> <a name="BinaryAuthorizationInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.binaryAuthorizationInput"></a>

```csharp
public GoogleCloudRunV2ServiceBinaryAuthorization BinaryAuthorizationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorization">GoogleCloudRunV2ServiceBinaryAuthorization</a>

---

##### `ClientInput`<sup>Optional</sup> <a name="ClientInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.clientInput"></a>

```csharp
public string ClientInput { get; }
```

- *Type:* string

---

##### `ClientVersionInput`<sup>Optional</sup> <a name="ClientVersionInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.clientVersionInput"></a>

```csharp
public string ClientVersionInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IngressInput`<sup>Optional</sup> <a name="IngressInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.ingressInput"></a>

```csharp
public string IngressInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LaunchStageInput`<sup>Optional</sup> <a name="LaunchStageInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.launchStageInput"></a>

```csharp
public string LaunchStageInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TemplateInput`<sup>Optional</sup> <a name="TemplateInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.templateInput"></a>

```csharp
public GoogleCloudRunV2ServiceTemplate TemplateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate">GoogleCloudRunV2ServiceTemplate</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TrafficInput`<sup>Optional</sup> <a name="TrafficInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.trafficInput"></a>

```csharp
public object TrafficInput { get; }
```

- *Type:* object

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Client`<sup>Required</sup> <a name="Client" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.client"></a>

```csharp
public string Client { get; }
```

- *Type:* string

---

##### `ClientVersion`<sup>Required</sup> <a name="ClientVersion" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.clientVersion"></a>

```csharp
public string ClientVersion { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Ingress`<sup>Required</sup> <a name="Ingress" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.ingress"></a>

```csharp
public string Ingress { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LaunchStage`<sup>Required</sup> <a name="LaunchStage" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.launchStage"></a>

```csharp
public string LaunchStage { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2Service.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudRunV2ServiceBinaryAuthorization <a name="GoogleCloudRunV2ServiceBinaryAuthorization" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceBinaryAuthorization {
    string BreakglassJustification = null,
    object UseDefault = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorization.property.breakglassJustification">BreakglassJustification</a></code> | <code>string</code> | If present, indicates to use Breakglass using this justification. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorization.property.useDefault">UseDefault</a></code> | <code>object</code> | If True, indicates to use the default project's binary authorization policy. If False, binary authorization will be disabled. |

---

##### `BreakglassJustification`<sup>Optional</sup> <a name="BreakglassJustification" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorization.property.breakglassJustification"></a>

```csharp
public string BreakglassJustification { get; set; }
```

- *Type:* string

If present, indicates to use Breakglass using this justification.

If useDefault is False, then it must be empty. For more information on breakglass, see https://cloud.google.com/binary-authorization/docs/using-breakglass

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#breakglass_justification GoogleCloudRunV2Service#breakglass_justification}

---

##### `UseDefault`<sup>Optional</sup> <a name="UseDefault" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorization.property.useDefault"></a>

```csharp
public object UseDefault { get; set; }
```

- *Type:* object

If True, indicates to use the default project's binary authorization policy. If False, binary authorization will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#use_default GoogleCloudRunV2Service#use_default}

---

### GoogleCloudRunV2ServiceConditions <a name="GoogleCloudRunV2ServiceConditions" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceConditions {

};
```


### GoogleCloudRunV2ServiceConfig <a name="GoogleCloudRunV2ServiceConfig" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    GoogleCloudRunV2ServiceTemplate Template,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    GoogleCloudRunV2ServiceBinaryAuthorization BinaryAuthorization = null,
    string Client = null,
    string ClientVersion = null,
    string Description = null,
    string Id = null,
    string Ingress = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string LaunchStage = null,
    string Location = null,
    string Project = null,
    GoogleCloudRunV2ServiceTimeouts Timeouts = null,
    object Traffic = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.name">Name</a></code> | <code>string</code> | Name of the Service. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.template">Template</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate">GoogleCloudRunV2ServiceTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.binaryAuthorization">BinaryAuthorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorization">GoogleCloudRunV2ServiceBinaryAuthorization</a></code> | binary_authorization block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.client">Client</a></code> | <code>string</code> | Arbitrary identifier for the API client. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.clientVersion">ClientVersion</a></code> | <code>string</code> | Arbitrary version identifier for the API client. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.description">Description</a></code> | <code>string</code> | User-provided description of the Service. This field currently has a 512-character limit. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#id GoogleCloudRunV2Service#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.ingress">Ingress</a></code> | <code>string</code> | Provides the ingress settings for this Service. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.launchStage">LaunchStage</a></code> | <code>string</code> | The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.location">Location</a></code> | <code>string</code> | The location of the cloud run service. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#project GoogleCloudRunV2Service#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeouts">GoogleCloudRunV2ServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.traffic">Traffic</a></code> | <code>object</code> | traffic block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#name GoogleCloudRunV2Service#name}

---

##### `Template`<sup>Required</sup> <a name="Template" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.template"></a>

```csharp
public GoogleCloudRunV2ServiceTemplate Template { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate">GoogleCloudRunV2ServiceTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#template GoogleCloudRunV2Service#template}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected in new resources.
All system annotations in v1 now have a corresponding field in v2 Service.

This field follows Kubernetes annotations' namespacing, limits, and rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#annotations GoogleCloudRunV2Service#annotations}

---

##### `BinaryAuthorization`<sup>Optional</sup> <a name="BinaryAuthorization" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.binaryAuthorization"></a>

```csharp
public GoogleCloudRunV2ServiceBinaryAuthorization BinaryAuthorization { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorization">GoogleCloudRunV2ServiceBinaryAuthorization</a>

binary_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#binary_authorization GoogleCloudRunV2Service#binary_authorization}

---

##### `Client`<sup>Optional</sup> <a name="Client" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.client"></a>

```csharp
public string Client { get; set; }
```

- *Type:* string

Arbitrary identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#client GoogleCloudRunV2Service#client}

---

##### `ClientVersion`<sup>Optional</sup> <a name="ClientVersion" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.clientVersion"></a>

```csharp
public string ClientVersion { get; set; }
```

- *Type:* string

Arbitrary version identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#client_version GoogleCloudRunV2Service#client_version}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

User-provided description of the Service. This field currently has a 512-character limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#description GoogleCloudRunV2Service#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#id GoogleCloudRunV2Service#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ingress`<sup>Optional</sup> <a name="Ingress" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.ingress"></a>

```csharp
public string Ingress { get; set; }
```

- *Type:* string

Provides the ingress settings for this Service.

On output, returns the currently observed ingress settings, or INGRESS_TRAFFIC_UNSPECIFIED if no revision is active. Possible values: ["INGRESS_TRAFFIC_ALL", "INGRESS_TRAFFIC_INTERNAL_ONLY", "INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#ingress GoogleCloudRunV2Service#ingress}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Unstructured key value map that can be used to organize and categorize objects.

User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component,
environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.

Cloud Run API v2 does not support labels with  'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system labels in v1 now have a corresponding field in v2 Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#labels GoogleCloudRunV2Service#labels}

---

##### `LaunchStage`<sup>Optional</sup> <a name="LaunchStage" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.launchStage"></a>

```csharp
public string LaunchStage { get; set; }
```

- *Type:* string

The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features.

For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. Possible values: ["UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#launch_stage GoogleCloudRunV2Service#launch_stage}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the cloud run service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#location GoogleCloudRunV2Service#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#project GoogleCloudRunV2Service#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.timeouts"></a>

```csharp
public GoogleCloudRunV2ServiceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeouts">GoogleCloudRunV2ServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#timeouts GoogleCloudRunV2Service#timeouts}

---

##### `Traffic`<sup>Optional</sup> <a name="Traffic" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConfig.property.traffic"></a>

```csharp
public object Traffic { get; set; }
```

- *Type:* object

traffic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#traffic GoogleCloudRunV2Service#traffic}

---

### GoogleCloudRunV2ServiceTemplate <a name="GoogleCloudRunV2ServiceTemplate" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplate {
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    object Containers = null,
    string EncryptionKey = null,
    string ExecutionEnvironment = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    double MaxInstanceRequestConcurrency = null,
    string Revision = null,
    GoogleCloudRunV2ServiceTemplateScaling Scaling = null,
    string ServiceAccount = null,
    object SessionAffinity = null,
    string Timeout = null,
    object Volumes = null,
    GoogleCloudRunV2ServiceTemplateVpcAccess VpcAccess = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.containers">Containers</a></code> | <code>object</code> | containers block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.encryptionKey">EncryptionKey</a></code> | <code>string</code> | A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.executionEnvironment">ExecutionEnvironment</a></code> | <code>string</code> | The sandbox environment to host this Revision. Possible values: ["EXECUTION_ENVIRONMENT_GEN1", "EXECUTION_ENVIRONMENT_GEN2"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.maxInstanceRequestConcurrency">MaxInstanceRequestConcurrency</a></code> | <code>double</code> | Sets the maximum number of requests that each serving instance can receive. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.revision">Revision</a></code> | <code>string</code> | The unique name for the revision. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.scaling">Scaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScaling">GoogleCloudRunV2ServiceTemplateScaling</a></code> | scaling block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | Email address of the IAM service account associated with the revision of the service. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.sessionAffinity">SessionAffinity</a></code> | <code>object</code> | Enables session affinity. For more information, go to https://cloud.google.com/run/docs/configuring/session-affinity. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.timeout">Timeout</a></code> | <code>string</code> | Max allowed time for an instance to respond to a request. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.volumes">Volumes</a></code> | <code>object</code> | volumes block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.vpcAccess">VpcAccess</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccess">GoogleCloudRunV2ServiceTemplateVpcAccess</a></code> | vpc_access block. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system annotations in v1 now have a corresponding field in v2 RevisionTemplate.

This field follows Kubernetes annotations' namespacing, limits, and rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#annotations GoogleCloudRunV2Service#annotations}

---

##### `Containers`<sup>Optional</sup> <a name="Containers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.containers"></a>

```csharp
public object Containers { get; set; }
```

- *Type:* object

containers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#containers GoogleCloudRunV2Service#containers}

---

##### `EncryptionKey`<sup>Optional</sup> <a name="EncryptionKey" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.encryptionKey"></a>

```csharp
public string EncryptionKey { get; set; }
```

- *Type:* string

A reference to a customer managed encryption key (CMEK) to use to encrypt this container image.

For more information, go to https://cloud.google.com/run/docs/securing/using-cmek

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#encryption_key GoogleCloudRunV2Service#encryption_key}

---

##### `ExecutionEnvironment`<sup>Optional</sup> <a name="ExecutionEnvironment" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.executionEnvironment"></a>

```csharp
public string ExecutionEnvironment { get; set; }
```

- *Type:* string

The sandbox environment to host this Revision. Possible values: ["EXECUTION_ENVIRONMENT_GEN1", "EXECUTION_ENVIRONMENT_GEN2"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#execution_environment GoogleCloudRunV2Service#execution_environment}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Unstructured key value map that can be used to organize and categorize objects.

User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc.
For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.

Cloud Run API v2 does not support labels with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system labels in v1 now have a corresponding field in v2 RevisionTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#labels GoogleCloudRunV2Service#labels}

---

##### `MaxInstanceRequestConcurrency`<sup>Optional</sup> <a name="MaxInstanceRequestConcurrency" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.maxInstanceRequestConcurrency"></a>

```csharp
public double MaxInstanceRequestConcurrency { get; set; }
```

- *Type:* double

Sets the maximum number of requests that each serving instance can receive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#max_instance_request_concurrency GoogleCloudRunV2Service#max_instance_request_concurrency}

---

##### `Revision`<sup>Optional</sup> <a name="Revision" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.revision"></a>

```csharp
public string Revision { get; set; }
```

- *Type:* string

The unique name for the revision.

If this field is omitted, it will be automatically generated based on the Service name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#revision GoogleCloudRunV2Service#revision}

---

##### `Scaling`<sup>Optional</sup> <a name="Scaling" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.scaling"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateScaling Scaling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScaling">GoogleCloudRunV2ServiceTemplateScaling</a>

scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#scaling GoogleCloudRunV2Service#scaling}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

Email address of the IAM service account associated with the revision of the service.

The service account represents the identity of the running revision, and determines what permissions the revision has. If not provided, the revision will use the project's default service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#service_account GoogleCloudRunV2Service#service_account}

---

##### `SessionAffinity`<sup>Optional</sup> <a name="SessionAffinity" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.sessionAffinity"></a>

```csharp
public object SessionAffinity { get; set; }
```

- *Type:* object

Enables session affinity. For more information, go to https://cloud.google.com/run/docs/configuring/session-affinity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#session_affinity GoogleCloudRunV2Service#session_affinity}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.timeout"></a>

```csharp
public string Timeout { get; set; }
```

- *Type:* string

Max allowed time for an instance to respond to a request.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#timeout GoogleCloudRunV2Service#timeout}

---

##### `Volumes`<sup>Optional</sup> <a name="Volumes" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.volumes"></a>

```csharp
public object Volumes { get; set; }
```

- *Type:* object

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#volumes GoogleCloudRunV2Service#volumes}

---

##### `VpcAccess`<sup>Optional</sup> <a name="VpcAccess" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate.property.vpcAccess"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateVpcAccess VpcAccess { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccess">GoogleCloudRunV2ServiceTemplateVpcAccess</a>

vpc_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#vpc_access GoogleCloudRunV2Service#vpc_access}

---

### GoogleCloudRunV2ServiceTemplateContainers <a name="GoogleCloudRunV2ServiceTemplateContainers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateContainers {
    string Image,
    string[] Args = null,
    string[] Command = null,
    string[] DependsOn = null,
    object Env = null,
    GoogleCloudRunV2ServiceTemplateContainersLivenessProbe LivenessProbe = null,
    string Name = null,
    object Ports = null,
    GoogleCloudRunV2ServiceTemplateContainersResources Resources = null,
    GoogleCloudRunV2ServiceTemplateContainersStartupProbe StartupProbe = null,
    object VolumeMounts = null,
    string WorkingDir = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.image">Image</a></code> | <code>string</code> | URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.args">Args</a></code> | <code>string[]</code> | Arguments to the entrypoint. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.command">Command</a></code> | <code>string[]</code> | Entrypoint array. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | Containers which should be started before this container. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.env">Env</a></code> | <code>object</code> | env block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.livenessProbe">LivenessProbe</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe">GoogleCloudRunV2ServiceTemplateContainersLivenessProbe</a></code> | liveness_probe block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.name">Name</a></code> | <code>string</code> | Name of the container specified as a DNS_LABEL. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.ports">Ports</a></code> | <code>object</code> | ports block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResources">GoogleCloudRunV2ServiceTemplateContainersResources</a></code> | resources block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.startupProbe">StartupProbe</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe">GoogleCloudRunV2ServiceTemplateContainersStartupProbe</a></code> | startup_probe block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.volumeMounts">VolumeMounts</a></code> | <code>object</code> | volume_mounts block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.workingDir">WorkingDir</a></code> | <code>string</code> | Container's working directory. |

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.image"></a>

```csharp
public string Image { get; set; }
```

- *Type:* string

URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#image GoogleCloudRunV2Service#image}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.args"></a>

```csharp
public string[] Args { get; set; }
```

- *Type:* string[]

Arguments to the entrypoint.

The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#args GoogleCloudRunV2Service#args}

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.command"></a>

```csharp
public string[] Command { get; set; }
```

- *Type:* string[]

Entrypoint array.

Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#command GoogleCloudRunV2Service#command}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; set; }
```

- *Type:* string[]

Containers which should be started before this container.

If specified the container will wait to start until all containers with the listed names are healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#depends_on GoogleCloudRunV2Service#depends_on}

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.env"></a>

```csharp
public object Env { get; set; }
```

- *Type:* object

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#env GoogleCloudRunV2Service#env}

---

##### `LivenessProbe`<sup>Optional</sup> <a name="LivenessProbe" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.livenessProbe"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersLivenessProbe LivenessProbe { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe">GoogleCloudRunV2ServiceTemplateContainersLivenessProbe</a>

liveness_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#liveness_probe GoogleCloudRunV2Service#liveness_probe}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the container specified as a DNS_LABEL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#name GoogleCloudRunV2Service#name}

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.ports"></a>

```csharp
public object Ports { get; set; }
```

- *Type:* object

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#ports GoogleCloudRunV2Service#ports}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.resources"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersResources Resources { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResources">GoogleCloudRunV2ServiceTemplateContainersResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#resources GoogleCloudRunV2Service#resources}

---

##### `StartupProbe`<sup>Optional</sup> <a name="StartupProbe" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.startupProbe"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersStartupProbe StartupProbe { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe">GoogleCloudRunV2ServiceTemplateContainersStartupProbe</a>

startup_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#startup_probe GoogleCloudRunV2Service#startup_probe}

---

##### `VolumeMounts`<sup>Optional</sup> <a name="VolumeMounts" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.volumeMounts"></a>

```csharp
public object VolumeMounts { get; set; }
```

- *Type:* object

volume_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#volume_mounts GoogleCloudRunV2Service#volume_mounts}

---

##### `WorkingDir`<sup>Optional</sup> <a name="WorkingDir" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainers.property.workingDir"></a>

```csharp
public string WorkingDir { get; set; }
```

- *Type:* string

Container's working directory.

If not specified, the container runtime's default will be used, which might be configured in the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#working_dir GoogleCloudRunV2Service#working_dir}

---

### GoogleCloudRunV2ServiceTemplateContainersEnv <a name="GoogleCloudRunV2ServiceTemplateContainersEnv" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnv.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateContainersEnv {
    string Name,
    string Value = null,
    GoogleCloudRunV2ServiceTemplateContainersEnvValueSource ValueSource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnv.property.name">Name</a></code> | <code>string</code> | Name of the environment variable. Must be a C_IDENTIFIER, and mnay not exceed 32768 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnv.property.value">Value</a></code> | <code>string</code> | Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any route environment variables. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnv.property.valueSource">ValueSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSource">GoogleCloudRunV2ServiceTemplateContainersEnvValueSource</a></code> | value_source block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnv.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the environment variable. Must be a C_IDENTIFIER, and mnay not exceed 32768 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#name GoogleCloudRunV2Service#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnv.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any route environment variables.

If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "", and the maximum length is 32768 bytes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#value GoogleCloudRunV2Service#value}

---

##### `ValueSource`<sup>Optional</sup> <a name="ValueSource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnv.property.valueSource"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersEnvValueSource ValueSource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSource">GoogleCloudRunV2ServiceTemplateContainersEnvValueSource</a>

value_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#value_source GoogleCloudRunV2Service#value_source}

---

### GoogleCloudRunV2ServiceTemplateContainersEnvValueSource <a name="GoogleCloudRunV2ServiceTemplateContainersEnvValueSource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateContainersEnvValueSource {
    GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef SecretKeyRef = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSource.property.secretKeyRef">SecretKeyRef</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef</a></code> | secret_key_ref block. |

---

##### `SecretKeyRef`<sup>Optional</sup> <a name="SecretKeyRef" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSource.property.secretKeyRef"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef SecretKeyRef { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef</a>

secret_key_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#secret_key_ref GoogleCloudRunV2Service#secret_key_ref}

---

### GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef <a name="GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef {
    string Secret,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef.property.secret">Secret</a></code> | <code>string</code> | The name of the secret in Cloud Secret Manager. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef.property.version">Version</a></code> | <code>string</code> | The Cloud Secret Manager secret version. |

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef.property.secret"></a>

```csharp
public string Secret { get; set; }
```

- *Type:* string

The name of the secret in Cloud Secret Manager.

Format: {secretName} if the secret is in the same project. projects/{project}/secrets/{secretName} if the secret is in a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#secret GoogleCloudRunV2Service#secret}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

The Cloud Secret Manager secret version.

Can be 'latest' for the latest value or an integer for a specific version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#version GoogleCloudRunV2Service#version}

---

### GoogleCloudRunV2ServiceTemplateContainersLivenessProbe <a name="GoogleCloudRunV2ServiceTemplateContainersLivenessProbe" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateContainersLivenessProbe {
    double FailureThreshold = null,
    GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc Grpc = null,
    GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet HttpGet = null,
    double InitialDelaySeconds = null,
    double PeriodSeconds = null,
    GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket TcpSocket = null,
    double TimeoutSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe.property.failureThreshold">FailureThreshold</a></code> | <code>double</code> | Minimum consecutive failures for the probe to be considered failed after having succeeded. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe.property.grpc">Grpc</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc</a></code> | grpc block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe.property.httpGet">HttpGet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet</a></code> | http_get block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe.property.initialDelaySeconds">InitialDelaySeconds</a></code> | <code>double</code> | Number of seconds after the container has started before the probe is initiated. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe.property.periodSeconds">PeriodSeconds</a></code> | <code>double</code> | How often (in seconds) to perform the probe. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe.property.tcpSocket">TcpSocket</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket</a></code> | tcp_socket block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>double</code> | Number of seconds after which the probe times out. |

---

##### `FailureThreshold`<sup>Optional</sup> <a name="FailureThreshold" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe.property.failureThreshold"></a>

```csharp
public double FailureThreshold { get; set; }
```

- *Type:* double

Minimum consecutive failures for the probe to be considered failed after having succeeded.

Defaults to 3. Minimum value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#failure_threshold GoogleCloudRunV2Service#failure_threshold}

---

##### `Grpc`<sup>Optional</sup> <a name="Grpc" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe.property.grpc"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc Grpc { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc</a>

grpc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#grpc GoogleCloudRunV2Service#grpc}

---

##### `HttpGet`<sup>Optional</sup> <a name="HttpGet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe.property.httpGet"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet HttpGet { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet</a>

http_get block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#http_get GoogleCloudRunV2Service#http_get}

---

##### `InitialDelaySeconds`<sup>Optional</sup> <a name="InitialDelaySeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe.property.initialDelaySeconds"></a>

```csharp
public double InitialDelaySeconds { get; set; }
```

- *Type:* double

Number of seconds after the container has started before the probe is initiated.

Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#initial_delay_seconds GoogleCloudRunV2Service#initial_delay_seconds}

---

##### `PeriodSeconds`<sup>Optional</sup> <a name="PeriodSeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe.property.periodSeconds"></a>

```csharp
public double PeriodSeconds { get; set; }
```

- *Type:* double

How often (in seconds) to perform the probe.

Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeoutSeconds

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#period_seconds GoogleCloudRunV2Service#period_seconds}

---

##### `TcpSocket`<sup>Optional</sup> <a name="TcpSocket" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe.property.tcpSocket"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket TcpSocket { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket</a>

tcp_socket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#tcp_socket GoogleCloudRunV2Service#tcp_socket}

---

##### `TimeoutSeconds`<sup>Optional</sup> <a name="TimeoutSeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe.property.timeoutSeconds"></a>

```csharp
public double TimeoutSeconds { get; set; }
```

- *Type:* double

Number of seconds after which the probe times out.

Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than periodSeconds. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#timeout_seconds GoogleCloudRunV2Service#timeout_seconds}

---

### GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc <a name="GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc {
    double Port = null,
    string Service = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc.property.port">Port</a></code> | <code>double</code> | Port number to access on the container. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc.property.service">Service</a></code> | <code>string</code> | The name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Port number to access on the container.

Number must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#port GoogleCloudRunV2Service#port}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

The name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#service GoogleCloudRunV2Service#service}

---

### GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet <a name="GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet {
    object HttpHeaders = null,
    string Path = null,
    double Port = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet.property.httpHeaders">HttpHeaders</a></code> | <code>object</code> | http_headers block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet.property.path">Path</a></code> | <code>string</code> | Path to access on the HTTP server. Defaults to '/'. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet.property.port">Port</a></code> | <code>double</code> | Port number to access on the container. |

---

##### `HttpHeaders`<sup>Optional</sup> <a name="HttpHeaders" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet.property.httpHeaders"></a>

```csharp
public object HttpHeaders { get; set; }
```

- *Type:* object

http_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#http_headers GoogleCloudRunV2Service#http_headers}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Path to access on the HTTP server. Defaults to '/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#path GoogleCloudRunV2Service#path}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Port number to access on the container.

Number must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#port GoogleCloudRunV2Service#port}

---

### GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders <a name="GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders {
    string Name,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders.property.name">Name</a></code> | <code>string</code> | The header field name. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders.property.value">Value</a></code> | <code>string</code> | The header field value. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The header field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#name GoogleCloudRunV2Service#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The header field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#value GoogleCloudRunV2Service#value}

---

### GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket <a name="GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket {
    double Port = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket.property.port">Port</a></code> | <code>double</code> | Port number to access on the container. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Port number to access on the container.

Must be in the range 1 to 65535. If not specified, defaults to 8080.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#port GoogleCloudRunV2Service#port}

---

### GoogleCloudRunV2ServiceTemplateContainersPorts <a name="GoogleCloudRunV2ServiceTemplateContainersPorts" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPorts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateContainersPorts {
    double ContainerPort = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPorts.property.containerPort">ContainerPort</a></code> | <code>double</code> | Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPorts.property.name">Name</a></code> | <code>string</code> | If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c". |

---

##### `ContainerPort`<sup>Optional</sup> <a name="ContainerPort" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPorts.property.containerPort"></a>

```csharp
public double ContainerPort { get; set; }
```

- *Type:* double

Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#container_port GoogleCloudRunV2Service#container_port}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPorts.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#name GoogleCloudRunV2Service#name}

---

### GoogleCloudRunV2ServiceTemplateContainersResources <a name="GoogleCloudRunV2ServiceTemplateContainersResources" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateContainersResources {
    object CpuIdle = null,
    System.Collections.Generic.IDictionary<string, string> Limits = null,
    object StartupCpuBoost = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResources.property.cpuIdle">CpuIdle</a></code> | <code>object</code> | Determines whether CPU should be throttled or not outside of requests. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResources.property.limits">Limits</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Only memory and CPU are supported. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResources.property.startupCpuBoost">StartupCpuBoost</a></code> | <code>object</code> | Determines whether CPU should be boosted on startup of a new container instance above the requested CPU threshold, this can help reduce cold-start latency. |

---

##### `CpuIdle`<sup>Optional</sup> <a name="CpuIdle" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResources.property.cpuIdle"></a>

```csharp
public object CpuIdle { get; set; }
```

- *Type:* object

Determines whether CPU should be throttled or not outside of requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#cpu_idle GoogleCloudRunV2Service#cpu_idle}

---

##### `Limits`<sup>Optional</sup> <a name="Limits" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResources.property.limits"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Limits { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Only memory and CPU are supported.

Note: The only supported values for CPU are '1', '2', '4', and '8'. Setting 4 CPU requires at least 2Gi of memory. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#limits GoogleCloudRunV2Service#limits}

---

##### `StartupCpuBoost`<sup>Optional</sup> <a name="StartupCpuBoost" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResources.property.startupCpuBoost"></a>

```csharp
public object StartupCpuBoost { get; set; }
```

- *Type:* object

Determines whether CPU should be boosted on startup of a new container instance above the requested CPU threshold, this can help reduce cold-start latency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#startup_cpu_boost GoogleCloudRunV2Service#startup_cpu_boost}

---

### GoogleCloudRunV2ServiceTemplateContainersStartupProbe <a name="GoogleCloudRunV2ServiceTemplateContainersStartupProbe" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateContainersStartupProbe {
    double FailureThreshold = null,
    GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc Grpc = null,
    GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet HttpGet = null,
    double InitialDelaySeconds = null,
    double PeriodSeconds = null,
    GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket TcpSocket = null,
    double TimeoutSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe.property.failureThreshold">FailureThreshold</a></code> | <code>double</code> | Minimum consecutive failures for the probe to be considered failed after having succeeded. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe.property.grpc">Grpc</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc">GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc</a></code> | grpc block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe.property.httpGet">HttpGet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet">GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet</a></code> | http_get block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe.property.initialDelaySeconds">InitialDelaySeconds</a></code> | <code>double</code> | Number of seconds after the container has started before the probe is initiated. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe.property.periodSeconds">PeriodSeconds</a></code> | <code>double</code> | How often (in seconds) to perform the probe. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe.property.tcpSocket">TcpSocket</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket">GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket</a></code> | tcp_socket block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>double</code> | Number of seconds after which the probe times out. |

---

##### `FailureThreshold`<sup>Optional</sup> <a name="FailureThreshold" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe.property.failureThreshold"></a>

```csharp
public double FailureThreshold { get; set; }
```

- *Type:* double

Minimum consecutive failures for the probe to be considered failed after having succeeded.

Defaults to 3. Minimum value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#failure_threshold GoogleCloudRunV2Service#failure_threshold}

---

##### `Grpc`<sup>Optional</sup> <a name="Grpc" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe.property.grpc"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc Grpc { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc">GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc</a>

grpc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#grpc GoogleCloudRunV2Service#grpc}

---

##### `HttpGet`<sup>Optional</sup> <a name="HttpGet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe.property.httpGet"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet HttpGet { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet">GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet</a>

http_get block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#http_get GoogleCloudRunV2Service#http_get}

---

##### `InitialDelaySeconds`<sup>Optional</sup> <a name="InitialDelaySeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe.property.initialDelaySeconds"></a>

```csharp
public double InitialDelaySeconds { get; set; }
```

- *Type:* double

Number of seconds after the container has started before the probe is initiated.

Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#initial_delay_seconds GoogleCloudRunV2Service#initial_delay_seconds}

---

##### `PeriodSeconds`<sup>Optional</sup> <a name="PeriodSeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe.property.periodSeconds"></a>

```csharp
public double PeriodSeconds { get; set; }
```

- *Type:* double

How often (in seconds) to perform the probe.

Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeoutSeconds

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#period_seconds GoogleCloudRunV2Service#period_seconds}

---

##### `TcpSocket`<sup>Optional</sup> <a name="TcpSocket" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe.property.tcpSocket"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket TcpSocket { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket">GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket</a>

tcp_socket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#tcp_socket GoogleCloudRunV2Service#tcp_socket}

---

##### `TimeoutSeconds`<sup>Optional</sup> <a name="TimeoutSeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe.property.timeoutSeconds"></a>

```csharp
public double TimeoutSeconds { get; set; }
```

- *Type:* double

Number of seconds after which the probe times out.

Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than periodSeconds. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#timeout_seconds GoogleCloudRunV2Service#timeout_seconds}

---

### GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc <a name="GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc {
    double Port = null,
    string Service = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc.property.port">Port</a></code> | <code>double</code> | Port number to access on the container. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc.property.service">Service</a></code> | <code>string</code> | The name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Port number to access on the container.

Number must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#port GoogleCloudRunV2Service#port}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

The name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#service GoogleCloudRunV2Service#service}

---

### GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet <a name="GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet {
    object HttpHeaders = null,
    string Path = null,
    double Port = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet.property.httpHeaders">HttpHeaders</a></code> | <code>object</code> | http_headers block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet.property.path">Path</a></code> | <code>string</code> | Path to access on the HTTP server. Defaults to '/'. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet.property.port">Port</a></code> | <code>double</code> | Port number to access on the container. |

---

##### `HttpHeaders`<sup>Optional</sup> <a name="HttpHeaders" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet.property.httpHeaders"></a>

```csharp
public object HttpHeaders { get; set; }
```

- *Type:* object

http_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#http_headers GoogleCloudRunV2Service#http_headers}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Path to access on the HTTP server. Defaults to '/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#path GoogleCloudRunV2Service#path}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Port number to access on the container.

Must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#port GoogleCloudRunV2Service#port}

---

### GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders <a name="GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders {
    string Name,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders.property.name">Name</a></code> | <code>string</code> | The header field name. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders.property.value">Value</a></code> | <code>string</code> | The header field value. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The header field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#name GoogleCloudRunV2Service#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The header field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#value GoogleCloudRunV2Service#value}

---

### GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket <a name="GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket {
    double Port = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket.property.port">Port</a></code> | <code>double</code> | Port number to access on the container. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Port number to access on the container.

Must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#port GoogleCloudRunV2Service#port}

---

### GoogleCloudRunV2ServiceTemplateContainersVolumeMounts <a name="GoogleCloudRunV2ServiceTemplateContainersVolumeMounts" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMounts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateContainersVolumeMounts {
    string MountPath,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMounts.property.mountPath">MountPath</a></code> | <code>string</code> | Path within the container at which the volume should be mounted. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMounts.property.name">Name</a></code> | <code>string</code> | This must match the Name of a Volume. |

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMounts.property.mountPath"></a>

```csharp
public string MountPath { get; set; }
```

- *Type:* string

Path within the container at which the volume should be mounted.

Must not contain ':'. For Cloud SQL volumes, it can be left empty, or must otherwise be /cloudsql. All instances defined in the Volume will be available as /cloudsql/[instance]. For more information on Cloud SQL volumes, visit https://cloud.google.com/sql/docs/mysql/connect-run

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#mount_path GoogleCloudRunV2Service#mount_path}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMounts.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

This must match the Name of a Volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#name GoogleCloudRunV2Service#name}

---

### GoogleCloudRunV2ServiceTemplateScaling <a name="GoogleCloudRunV2ServiceTemplateScaling" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScaling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateScaling {
    double MaxInstanceCount = null,
    double MinInstanceCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScaling.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>double</code> | Maximum number of serving instances that this resource should have. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScaling.property.minInstanceCount">MinInstanceCount</a></code> | <code>double</code> | Minimum number of serving instances that this resource should have. |

---

##### `MaxInstanceCount`<sup>Optional</sup> <a name="MaxInstanceCount" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScaling.property.maxInstanceCount"></a>

```csharp
public double MaxInstanceCount { get; set; }
```

- *Type:* double

Maximum number of serving instances that this resource should have.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#max_instance_count GoogleCloudRunV2Service#max_instance_count}

---

##### `MinInstanceCount`<sup>Optional</sup> <a name="MinInstanceCount" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScaling.property.minInstanceCount"></a>

```csharp
public double MinInstanceCount { get; set; }
```

- *Type:* double

Minimum number of serving instances that this resource should have.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#min_instance_count GoogleCloudRunV2Service#min_instance_count}

---

### GoogleCloudRunV2ServiceTemplateVolumes <a name="GoogleCloudRunV2ServiceTemplateVolumes" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateVolumes {
    string Name,
    GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance CloudSqlInstance = null,
    GoogleCloudRunV2ServiceTemplateVolumesEmptyDir EmptyDir = null,
    GoogleCloudRunV2ServiceTemplateVolumesSecret Secret = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumes.property.name">Name</a></code> | <code>string</code> | Volume's name. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumes.property.cloudSqlInstance">CloudSqlInstance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance">GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance</a></code> | cloud_sql_instance block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumes.property.emptyDir">EmptyDir</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDir">GoogleCloudRunV2ServiceTemplateVolumesEmptyDir</a></code> | empty_dir block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumes.property.secret">Secret</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecret">GoogleCloudRunV2ServiceTemplateVolumesSecret</a></code> | secret block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumes.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Volume's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#name GoogleCloudRunV2Service#name}

---

##### `CloudSqlInstance`<sup>Optional</sup> <a name="CloudSqlInstance" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumes.property.cloudSqlInstance"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance CloudSqlInstance { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance">GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance</a>

cloud_sql_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#cloud_sql_instance GoogleCloudRunV2Service#cloud_sql_instance}

---

##### `EmptyDir`<sup>Optional</sup> <a name="EmptyDir" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumes.property.emptyDir"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateVolumesEmptyDir EmptyDir { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDir">GoogleCloudRunV2ServiceTemplateVolumesEmptyDir</a>

empty_dir block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#empty_dir GoogleCloudRunV2Service#empty_dir}

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumes.property.secret"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateVolumesSecret Secret { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecret">GoogleCloudRunV2ServiceTemplateVolumesSecret</a>

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#secret GoogleCloudRunV2Service#secret}

---

### GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance <a name="GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance {
    string[] Instances = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance.property.instances">Instances</a></code> | <code>string[]</code> | The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}. |

---

##### `Instances`<sup>Optional</sup> <a name="Instances" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance.property.instances"></a>

```csharp
public string[] Instances { get; set; }
```

- *Type:* string[]

The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#instances GoogleCloudRunV2Service#instances}

---

### GoogleCloudRunV2ServiceTemplateVolumesEmptyDir <a name="GoogleCloudRunV2ServiceTemplateVolumesEmptyDir" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDir"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDir.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateVolumesEmptyDir {
    string Medium = null,
    string SizeLimit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDir.property.medium">Medium</a></code> | <code>string</code> | The different types of medium supported for EmptyDir. Default value: "MEMORY" Possible values: ["MEMORY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDir.property.sizeLimit">SizeLimit</a></code> | <code>string</code> | Limit on the storage usable by this EmptyDir volume. |

---

##### `Medium`<sup>Optional</sup> <a name="Medium" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDir.property.medium"></a>

```csharp
public string Medium { get; set; }
```

- *Type:* string

The different types of medium supported for EmptyDir. Default value: "MEMORY" Possible values: ["MEMORY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#medium GoogleCloudRunV2Service#medium}

---

##### `SizeLimit`<sup>Optional</sup> <a name="SizeLimit" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDir.property.sizeLimit"></a>

```csharp
public string SizeLimit { get; set; }
```

- *Type:* string

Limit on the storage usable by this EmptyDir volume.

The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. This field's values are of the 'Quantity' k8s type: https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/. The default is nil which means that the limit is undefined. More info: https://kubernetes.io/docs/concepts/storage/volumes/#emptydir.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#size_limit GoogleCloudRunV2Service#size_limit}

---

### GoogleCloudRunV2ServiceTemplateVolumesSecret <a name="GoogleCloudRunV2ServiceTemplateVolumesSecret" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecret.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateVolumesSecret {
    string Secret,
    double DefaultMode = null,
    object Items = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecret.property.secret">Secret</a></code> | <code>string</code> | The name of the secret in Cloud Secret Manager. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecret.property.defaultMode">DefaultMode</a></code> | <code>double</code> | Integer representation of mode bits to use on created files by default. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecret.property.items">Items</a></code> | <code>object</code> | items block. |

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecret.property.secret"></a>

```csharp
public string Secret { get; set; }
```

- *Type:* string

The name of the secret in Cloud Secret Manager.

Format: {secret} if the secret is in the same project. projects/{project}/secrets/{secret} if the secret is in a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#secret GoogleCloudRunV2Service#secret}

---

##### `DefaultMode`<sup>Optional</sup> <a name="DefaultMode" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecret.property.defaultMode"></a>

```csharp
public double DefaultMode { get; set; }
```

- *Type:* double

Integer representation of mode bits to use on created files by default.

Must be a value between 0000 and 0777 (octal), defaulting to 0444. Directories within the path are not affected by this setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#default_mode GoogleCloudRunV2Service#default_mode}

---

##### `Items`<sup>Optional</sup> <a name="Items" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecret.property.items"></a>

```csharp
public object Items { get; set; }
```

- *Type:* object

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#items GoogleCloudRunV2Service#items}

---

### GoogleCloudRunV2ServiceTemplateVolumesSecretItems <a name="GoogleCloudRunV2ServiceTemplateVolumesSecretItems" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateVolumesSecretItems {
    double Mode,
    string Path,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItems.property.mode">Mode</a></code> | <code>double</code> | Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal). |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItems.property.path">Path</a></code> | <code>string</code> | The relative path of the secret in the container. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItems.property.version">Version</a></code> | <code>string</code> | The Cloud Secret Manager secret version. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItems.property.mode"></a>

```csharp
public double Mode { get; set; }
```

- *Type:* double

Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal).

If 0 or not set, the Volume's default mode will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#mode GoogleCloudRunV2Service#mode}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItems.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The relative path of the secret in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#path GoogleCloudRunV2Service#path}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItems.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

The Cloud Secret Manager secret version.

Can be 'latest' for the latest value or an integer for a specific version

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#version GoogleCloudRunV2Service#version}

---

### GoogleCloudRunV2ServiceTemplateVpcAccess <a name="GoogleCloudRunV2ServiceTemplateVpcAccess" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccess.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateVpcAccess {
    string Connector = null,
    string Egress = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccess.property.connector">Connector</a></code> | <code>string</code> | VPC Access connector name. Format: projects/{project}/locations/{location}/connectors/{connector}, where {project} can be project id or number. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccess.property.egress">Egress</a></code> | <code>string</code> | Traffic VPC egress settings. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"]. |

---

##### `Connector`<sup>Optional</sup> <a name="Connector" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccess.property.connector"></a>

```csharp
public string Connector { get; set; }
```

- *Type:* string

VPC Access connector name. Format: projects/{project}/locations/{location}/connectors/{connector}, where {project} can be project id or number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#connector GoogleCloudRunV2Service#connector}

---

##### `Egress`<sup>Optional</sup> <a name="Egress" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccess.property.egress"></a>

```csharp
public string Egress { get; set; }
```

- *Type:* string

Traffic VPC egress settings. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#egress GoogleCloudRunV2Service#egress}

---

### GoogleCloudRunV2ServiceTerminalCondition <a name="GoogleCloudRunV2ServiceTerminalCondition" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTerminalCondition {

};
```


### GoogleCloudRunV2ServiceTimeouts <a name="GoogleCloudRunV2ServiceTimeouts" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#create GoogleCloudRunV2Service#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#delete GoogleCloudRunV2Service#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#update GoogleCloudRunV2Service#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#create GoogleCloudRunV2Service#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#delete GoogleCloudRunV2Service#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#update GoogleCloudRunV2Service#update}.

---

### GoogleCloudRunV2ServiceTraffic <a name="GoogleCloudRunV2ServiceTraffic" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTraffic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTraffic.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTraffic {
    double Percent = null,
    string Revision = null,
    string Tag = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTraffic.property.percent">Percent</a></code> | <code>double</code> | Specifies percent of the traffic to this Revision. This defaults to zero if unspecified. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTraffic.property.revision">Revision</a></code> | <code>string</code> | Revision to which to send this portion of traffic, if traffic allocation is by revision. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTraffic.property.tag">Tag</a></code> | <code>string</code> | Indicates a string to be part of the URI to exclusively reference this target. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTraffic.property.type">Type</a></code> | <code>string</code> | The allocation type for this traffic target. Possible values: ["TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST", "TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION"]. |

---

##### `Percent`<sup>Optional</sup> <a name="Percent" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTraffic.property.percent"></a>

```csharp
public double Percent { get; set; }
```

- *Type:* double

Specifies percent of the traffic to this Revision. This defaults to zero if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#percent GoogleCloudRunV2Service#percent}

---

##### `Revision`<sup>Optional</sup> <a name="Revision" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTraffic.property.revision"></a>

```csharp
public string Revision { get; set; }
```

- *Type:* string

Revision to which to send this portion of traffic, if traffic allocation is by revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#revision GoogleCloudRunV2Service#revision}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTraffic.property.tag"></a>

```csharp
public string Tag { get; set; }
```

- *Type:* string

Indicates a string to be part of the URI to exclusively reference this target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#tag GoogleCloudRunV2Service#tag}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTraffic.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The allocation type for this traffic target. Possible values: ["TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST", "TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_cloud_run_v2_service#type GoogleCloudRunV2Service#type}

---

### GoogleCloudRunV2ServiceTrafficStatuses <a name="GoogleCloudRunV2ServiceTrafficStatuses" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatuses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatuses.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTrafficStatuses {

};
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference <a name="GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.resetBreakglassJustification">ResetBreakglassJustification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.resetUseDefault">ResetUseDefault</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBreakglassJustification` <a name="ResetBreakglassJustification" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.resetBreakglassJustification"></a>

```csharp
private void ResetBreakglassJustification()
```

##### `ResetUseDefault` <a name="ResetUseDefault" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.resetUseDefault"></a>

```csharp
private void ResetUseDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.property.breakglassJustificationInput">BreakglassJustificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.property.useDefaultInput">UseDefaultInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.property.breakglassJustification">BreakglassJustification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.property.useDefault">UseDefault</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorization">GoogleCloudRunV2ServiceBinaryAuthorization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BreakglassJustificationInput`<sup>Optional</sup> <a name="BreakglassJustificationInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.property.breakglassJustificationInput"></a>

```csharp
public string BreakglassJustificationInput { get; }
```

- *Type:* string

---

##### `UseDefaultInput`<sup>Optional</sup> <a name="UseDefaultInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.property.useDefaultInput"></a>

```csharp
public object UseDefaultInput { get; }
```

- *Type:* object

---

##### `BreakglassJustification`<sup>Required</sup> <a name="BreakglassJustification" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.property.breakglassJustification"></a>

```csharp
public string BreakglassJustification { get; }
```

- *Type:* string

---

##### `UseDefault`<sup>Required</sup> <a name="UseDefault" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.property.useDefault"></a>

```csharp
public object UseDefault { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorizationOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudRunV2ServiceBinaryAuthorization InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceBinaryAuthorization">GoogleCloudRunV2ServiceBinaryAuthorization</a>

---


### GoogleCloudRunV2ServiceConditionsList <a name="GoogleCloudRunV2ServiceConditionsList" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList.get"></a>

```csharp
private GoogleCloudRunV2ServiceConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleCloudRunV2ServiceConditionsOutputReference <a name="GoogleCloudRunV2ServiceConditionsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.executionReason">ExecutionReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.lastTransitionTime">LastTransitionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.reason">Reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.revisionReason">RevisionReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditions">GoogleCloudRunV2ServiceConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExecutionReason`<sup>Required</sup> <a name="ExecutionReason" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.executionReason"></a>

```csharp
public string ExecutionReason { get; }
```

- *Type:* string

---

##### `LastTransitionTime`<sup>Required</sup> <a name="LastTransitionTime" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.lastTransitionTime"></a>

```csharp
public string LastTransitionTime { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.reason"></a>

```csharp
public string Reason { get; }
```

- *Type:* string

---

##### `RevisionReason`<sup>Required</sup> <a name="RevisionReason" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.revisionReason"></a>

```csharp
public string RevisionReason { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditionsOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudRunV2ServiceConditions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceConditions">GoogleCloudRunV2ServiceConditions</a>

---


### GoogleCloudRunV2ServiceTemplateContainersEnvList <a name="GoogleCloudRunV2ServiceTemplateContainersEnvList" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateContainersEnvList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.get"></a>

```csharp
private GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference <a name="GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.putValueSource">PutValueSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.resetValueSource">ResetValueSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValueSource` <a name="PutValueSource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.putValueSource"></a>

```csharp
private void PutValueSource(GoogleCloudRunV2ServiceTemplateContainersEnvValueSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.putValueSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSource">GoogleCloudRunV2ServiceTemplateContainersEnvValueSource</a>

---

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```

##### `ResetValueSource` <a name="ResetValueSource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.resetValueSource"></a>

```csharp
private void ResetValueSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.property.valueSource">ValueSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference">GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.property.valueSourceInput">ValueSourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSource">GoogleCloudRunV2ServiceTemplateContainersEnvValueSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueSource`<sup>Required</sup> <a name="ValueSource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.property.valueSource"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference ValueSource { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference">GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `ValueSourceInput`<sup>Optional</sup> <a name="ValueSourceInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.property.valueSourceInput"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersEnvValueSource ValueSourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSource">GoogleCloudRunV2ServiceTemplateContainersEnvValueSource</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference <a name="GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.putSecretKeyRef">PutSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.resetSecretKeyRef">ResetSecretKeyRef</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSecretKeyRef` <a name="PutSecretKeyRef" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.putSecretKeyRef"></a>

```csharp
private void PutSecretKeyRef(GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.putSecretKeyRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef</a>

---

##### `ResetSecretKeyRef` <a name="ResetSecretKeyRef" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.resetSecretKeyRef"></a>

```csharp
private void ResetSecretKeyRef()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.secretKeyRef">SecretKeyRef</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference">GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.secretKeyRefInput">SecretKeyRefInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSource">GoogleCloudRunV2ServiceTemplateContainersEnvValueSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretKeyRef`<sup>Required</sup> <a name="SecretKeyRef" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.secretKeyRef"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference SecretKeyRef { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference">GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference</a>

---

##### `SecretKeyRefInput`<sup>Optional</sup> <a name="SecretKeyRefInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.secretKeyRefInput"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef SecretKeyRefInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersEnvValueSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSource">GoogleCloudRunV2ServiceTemplateContainersEnvValueSource</a>

---


### GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference <a name="GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secretInput">SecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secret">Secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secretInput"></a>

```csharp
public string SecretInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secret"></a>

```csharp
public string Secret { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef</a>

---


### GoogleCloudRunV2ServiceTemplateContainersList <a name="GoogleCloudRunV2ServiceTemplateContainersList" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateContainersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.get"></a>

```csharp
private GoogleCloudRunV2ServiceTemplateContainersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference <a name="GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.resetService">ResetService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.resetService"></a>

```csharp
private void ResetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc</a>

---


### GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList <a name="GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.get"></a>

```csharp
private GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference <a name="GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference <a name="GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.putHttpHeaders">PutHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.resetHttpHeaders">ResetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHttpHeaders` <a name="PutHttpHeaders" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.putHttpHeaders"></a>

```csharp
private void PutHttpHeaders(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.putHttpHeaders.parameter.value"></a>

- *Type:* object

---

##### `ResetHttpHeaders` <a name="ResetHttpHeaders" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.resetHttpHeaders"></a>

```csharp
private void ResetHttpHeaders()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.httpHeaders">HttpHeaders</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.httpHeadersInput">HttpHeadersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpHeaders`<sup>Required</sup> <a name="HttpHeaders" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.httpHeaders"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList HttpHeaders { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList</a>

---

##### `HttpHeadersInput`<sup>Optional</sup> <a name="HttpHeadersInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.httpHeadersInput"></a>

```csharp
public object HttpHeadersInput { get; }
```

- *Type:* object

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet</a>

---


### GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference <a name="GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putGrpc">PutGrpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putHttpGet">PutHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putTcpSocket">PutTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetFailureThreshold">ResetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetGrpc">ResetGrpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetHttpGet">ResetHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetInitialDelaySeconds">ResetInitialDelaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetPeriodSeconds">ResetPeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetTcpSocket">ResetTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetTimeoutSeconds">ResetTimeoutSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGrpc` <a name="PutGrpc" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putGrpc"></a>

```csharp
private void PutGrpc(GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putGrpc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc</a>

---

##### `PutHttpGet` <a name="PutHttpGet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putHttpGet"></a>

```csharp
private void PutHttpGet(GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putHttpGet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet</a>

---

##### `PutTcpSocket` <a name="PutTcpSocket" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putTcpSocket"></a>

```csharp
private void PutTcpSocket(GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putTcpSocket.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket</a>

---

##### `ResetFailureThreshold` <a name="ResetFailureThreshold" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetFailureThreshold"></a>

```csharp
private void ResetFailureThreshold()
```

##### `ResetGrpc` <a name="ResetGrpc" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetGrpc"></a>

```csharp
private void ResetGrpc()
```

##### `ResetHttpGet` <a name="ResetHttpGet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetHttpGet"></a>

```csharp
private void ResetHttpGet()
```

##### `ResetInitialDelaySeconds` <a name="ResetInitialDelaySeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetInitialDelaySeconds"></a>

```csharp
private void ResetInitialDelaySeconds()
```

##### `ResetPeriodSeconds` <a name="ResetPeriodSeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetPeriodSeconds"></a>

```csharp
private void ResetPeriodSeconds()
```

##### `ResetTcpSocket` <a name="ResetTcpSocket" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetTcpSocket"></a>

```csharp
private void ResetTcpSocket()
```

##### `ResetTimeoutSeconds` <a name="ResetTimeoutSeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetTimeoutSeconds"></a>

```csharp
private void ResetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.grpc">Grpc</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.httpGet">HttpGet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.tcpSocket">TcpSocket</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.failureThresholdInput">FailureThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.grpcInput">GrpcInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.httpGetInput">HttpGetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.initialDelaySecondsInput">InitialDelaySecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.periodSecondsInput">PeriodSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.tcpSocketInput">TcpSocketInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.timeoutSecondsInput">TimeoutSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.failureThreshold">FailureThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.initialDelaySeconds">InitialDelaySeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.periodSeconds">PeriodSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe">GoogleCloudRunV2ServiceTemplateContainersLivenessProbe</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Grpc`<sup>Required</sup> <a name="Grpc" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.grpc"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference Grpc { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference</a>

---

##### `HttpGet`<sup>Required</sup> <a name="HttpGet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.httpGet"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference HttpGet { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference</a>

---

##### `TcpSocket`<sup>Required</sup> <a name="TcpSocket" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.tcpSocket"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference TcpSocket { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference</a>

---

##### `FailureThresholdInput`<sup>Optional</sup> <a name="FailureThresholdInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.failureThresholdInput"></a>

```csharp
public double FailureThresholdInput { get; }
```

- *Type:* double

---

##### `GrpcInput`<sup>Optional</sup> <a name="GrpcInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.grpcInput"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc GrpcInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeGrpc</a>

---

##### `HttpGetInput`<sup>Optional</sup> <a name="HttpGetInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.httpGetInput"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet HttpGetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeHttpGet</a>

---

##### `InitialDelaySecondsInput`<sup>Optional</sup> <a name="InitialDelaySecondsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.initialDelaySecondsInput"></a>

```csharp
public double InitialDelaySecondsInput { get; }
```

- *Type:* double

---

##### `PeriodSecondsInput`<sup>Optional</sup> <a name="PeriodSecondsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.periodSecondsInput"></a>

```csharp
public double PeriodSecondsInput { get; }
```

- *Type:* double

---

##### `TcpSocketInput`<sup>Optional</sup> <a name="TcpSocketInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.tcpSocketInput"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket TcpSocketInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket</a>

---

##### `TimeoutSecondsInput`<sup>Optional</sup> <a name="TimeoutSecondsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.timeoutSecondsInput"></a>

```csharp
public double TimeoutSecondsInput { get; }
```

- *Type:* double

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.failureThreshold"></a>

```csharp
public double FailureThreshold { get; }
```

- *Type:* double

---

##### `InitialDelaySeconds`<sup>Required</sup> <a name="InitialDelaySeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.initialDelaySeconds"></a>

```csharp
public double InitialDelaySeconds { get; }
```

- *Type:* double

---

##### `PeriodSeconds`<sup>Required</sup> <a name="PeriodSeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.periodSeconds"></a>

```csharp
public double PeriodSeconds { get; }
```

- *Type:* double

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.timeoutSeconds"></a>

```csharp
public double TimeoutSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersLivenessProbe InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe">GoogleCloudRunV2ServiceTemplateContainersLivenessProbe</a>

---


### GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference <a name="GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket</a>

---


### GoogleCloudRunV2ServiceTemplateContainersOutputReference <a name="GoogleCloudRunV2ServiceTemplateContainersOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateContainersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.putEnv">PutEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.putLivenessProbe">PutLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.putPorts">PutPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.putResources">PutResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.putStartupProbe">PutStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.putVolumeMounts">PutVolumeMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetDependsOn">ResetDependsOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetEnv">ResetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetLivenessProbe">ResetLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetPorts">ResetPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetResources">ResetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetStartupProbe">ResetStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetVolumeMounts">ResetVolumeMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetWorkingDir">ResetWorkingDir</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnv` <a name="PutEnv" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.putEnv"></a>

```csharp
private void PutEnv(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.putEnv.parameter.value"></a>

- *Type:* object

---

##### `PutLivenessProbe` <a name="PutLivenessProbe" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.putLivenessProbe"></a>

```csharp
private void PutLivenessProbe(GoogleCloudRunV2ServiceTemplateContainersLivenessProbe Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.putLivenessProbe.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe">GoogleCloudRunV2ServiceTemplateContainersLivenessProbe</a>

---

##### `PutPorts` <a name="PutPorts" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.putPorts"></a>

```csharp
private void PutPorts(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.putPorts.parameter.value"></a>

- *Type:* object

---

##### `PutResources` <a name="PutResources" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.putResources"></a>

```csharp
private void PutResources(GoogleCloudRunV2ServiceTemplateContainersResources Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.putResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResources">GoogleCloudRunV2ServiceTemplateContainersResources</a>

---

##### `PutStartupProbe` <a name="PutStartupProbe" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.putStartupProbe"></a>

```csharp
private void PutStartupProbe(GoogleCloudRunV2ServiceTemplateContainersStartupProbe Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.putStartupProbe.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe">GoogleCloudRunV2ServiceTemplateContainersStartupProbe</a>

---

##### `PutVolumeMounts` <a name="PutVolumeMounts" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.putVolumeMounts"></a>

```csharp
private void PutVolumeMounts(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.putVolumeMounts.parameter.value"></a>

- *Type:* object

---

##### `ResetArgs` <a name="ResetArgs" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetArgs"></a>

```csharp
private void ResetArgs()
```

##### `ResetCommand` <a name="ResetCommand" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetCommand"></a>

```csharp
private void ResetCommand()
```

##### `ResetDependsOn` <a name="ResetDependsOn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetDependsOn"></a>

```csharp
private void ResetDependsOn()
```

##### `ResetEnv` <a name="ResetEnv" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetEnv"></a>

```csharp
private void ResetEnv()
```

##### `ResetLivenessProbe` <a name="ResetLivenessProbe" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetLivenessProbe"></a>

```csharp
private void ResetLivenessProbe()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPorts` <a name="ResetPorts" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetPorts"></a>

```csharp
private void ResetPorts()
```

##### `ResetResources` <a name="ResetResources" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetResources"></a>

```csharp
private void ResetResources()
```

##### `ResetStartupProbe` <a name="ResetStartupProbe" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetStartupProbe"></a>

```csharp
private void ResetStartupProbe()
```

##### `ResetVolumeMounts` <a name="ResetVolumeMounts" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetVolumeMounts"></a>

```csharp
private void ResetVolumeMounts()
```

##### `ResetWorkingDir` <a name="ResetWorkingDir" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.resetWorkingDir"></a>

```csharp
private void ResetWorkingDir()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.env">Env</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList">GoogleCloudRunV2ServiceTemplateContainersEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.livenessProbe">LivenessProbe</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.ports">Ports</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList">GoogleCloudRunV2ServiceTemplateContainersPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference">GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.startupProbe">StartupProbe</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference">GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.volumeMounts">VolumeMounts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList">GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.argsInput">ArgsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.commandInput">CommandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.dependsOnInput">DependsOnInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.envInput">EnvInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.imageInput">ImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.livenessProbeInput">LivenessProbeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe">GoogleCloudRunV2ServiceTemplateContainersLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.portsInput">PortsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResources">GoogleCloudRunV2ServiceTemplateContainersResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.startupProbeInput">StartupProbeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe">GoogleCloudRunV2ServiceTemplateContainersStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.volumeMountsInput">VolumeMountsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.workingDirInput">WorkingDirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.args">Args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.command">Command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.workingDir">WorkingDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.env"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersEnvList Env { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersEnvList">GoogleCloudRunV2ServiceTemplateContainersEnvList</a>

---

##### `LivenessProbe`<sup>Required</sup> <a name="LivenessProbe" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.livenessProbe"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference LivenessProbe { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference">GoogleCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference</a>

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.ports"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersPortsList Ports { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList">GoogleCloudRunV2ServiceTemplateContainersPortsList</a>

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.resources"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference Resources { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference">GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference</a>

---

##### `StartupProbe`<sup>Required</sup> <a name="StartupProbe" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.startupProbe"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference StartupProbe { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference">GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference</a>

---

##### `VolumeMounts`<sup>Required</sup> <a name="VolumeMounts" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.volumeMounts"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList VolumeMounts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList">GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList</a>

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.argsInput"></a>

```csharp
public string[] ArgsInput { get; }
```

- *Type:* string[]

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.commandInput"></a>

```csharp
public string[] CommandInput { get; }
```

- *Type:* string[]

---

##### `DependsOnInput`<sup>Optional</sup> <a name="DependsOnInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.dependsOnInput"></a>

```csharp
public string[] DependsOnInput { get; }
```

- *Type:* string[]

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.envInput"></a>

```csharp
public object EnvInput { get; }
```

- *Type:* object

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.imageInput"></a>

```csharp
public string ImageInput { get; }
```

- *Type:* string

---

##### `LivenessProbeInput`<sup>Optional</sup> <a name="LivenessProbeInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.livenessProbeInput"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersLivenessProbe LivenessProbeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersLivenessProbe">GoogleCloudRunV2ServiceTemplateContainersLivenessProbe</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.portsInput"></a>

```csharp
public object PortsInput { get; }
```

- *Type:* object

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.resourcesInput"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersResources ResourcesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResources">GoogleCloudRunV2ServiceTemplateContainersResources</a>

---

##### `StartupProbeInput`<sup>Optional</sup> <a name="StartupProbeInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.startupProbeInput"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersStartupProbe StartupProbeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe">GoogleCloudRunV2ServiceTemplateContainersStartupProbe</a>

---

##### `VolumeMountsInput`<sup>Optional</sup> <a name="VolumeMountsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.volumeMountsInput"></a>

```csharp
public object VolumeMountsInput { get; }
```

- *Type:* object

---

##### `WorkingDirInput`<sup>Optional</sup> <a name="WorkingDirInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.workingDirInput"></a>

```csharp
public string WorkingDirInput { get; }
```

- *Type:* string

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.args"></a>

```csharp
public string[] Args { get; }
```

- *Type:* string[]

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.command"></a>

```csharp
public string[] Command { get; }
```

- *Type:* string[]

---

##### `DependsOn`<sup>Required</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `WorkingDir`<sup>Required</sup> <a name="WorkingDir" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.workingDir"></a>

```csharp
public string WorkingDir { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleCloudRunV2ServiceTemplateContainersPortsList <a name="GoogleCloudRunV2ServiceTemplateContainersPortsList" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateContainersPortsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.get"></a>

```csharp
private GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference <a name="GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.resetContainerPort">ResetContainerPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerPort` <a name="ResetContainerPort" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.resetContainerPort"></a>

```csharp
private void ResetContainerPort()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.property.containerPortInput">ContainerPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.property.containerPort">ContainerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerPortInput`<sup>Optional</sup> <a name="ContainerPortInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.property.containerPortInput"></a>

```csharp
public double ContainerPortInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ContainerPort`<sup>Required</sup> <a name="ContainerPort" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.property.containerPort"></a>

```csharp
public double ContainerPort { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersPortsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference <a name="GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.resetCpuIdle">ResetCpuIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.resetLimits">ResetLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.resetStartupCpuBoost">ResetStartupCpuBoost</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpuIdle` <a name="ResetCpuIdle" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.resetCpuIdle"></a>

```csharp
private void ResetCpuIdle()
```

##### `ResetLimits` <a name="ResetLimits" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.resetLimits"></a>

```csharp
private void ResetLimits()
```

##### `ResetStartupCpuBoost` <a name="ResetStartupCpuBoost" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.resetStartupCpuBoost"></a>

```csharp
private void ResetStartupCpuBoost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.property.cpuIdleInput">CpuIdleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.property.limitsInput">LimitsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.property.startupCpuBoostInput">StartupCpuBoostInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.property.cpuIdle">CpuIdle</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.property.limits">Limits</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.property.startupCpuBoost">StartupCpuBoost</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResources">GoogleCloudRunV2ServiceTemplateContainersResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpuIdleInput`<sup>Optional</sup> <a name="CpuIdleInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.property.cpuIdleInput"></a>

```csharp
public object CpuIdleInput { get; }
```

- *Type:* object

---

##### `LimitsInput`<sup>Optional</sup> <a name="LimitsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.property.limitsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LimitsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `StartupCpuBoostInput`<sup>Optional</sup> <a name="StartupCpuBoostInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.property.startupCpuBoostInput"></a>

```csharp
public object StartupCpuBoostInput { get; }
```

- *Type:* object

---

##### `CpuIdle`<sup>Required</sup> <a name="CpuIdle" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.property.cpuIdle"></a>

```csharp
public object CpuIdle { get; }
```

- *Type:* object

---

##### `Limits`<sup>Required</sup> <a name="Limits" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.property.limits"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Limits { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `StartupCpuBoost`<sup>Required</sup> <a name="StartupCpuBoost" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.property.startupCpuBoost"></a>

```csharp
public object StartupCpuBoost { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResourcesOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersResources InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersResources">GoogleCloudRunV2ServiceTemplateContainersResources</a>

---


### GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference <a name="GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.resetService">ResetService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.resetService"></a>

```csharp
private void ResetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc">GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc">GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc</a>

---


### GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList <a name="GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.get"></a>

```csharp
private GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference <a name="GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference <a name="GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.putHttpHeaders">PutHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.resetHttpHeaders">ResetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHttpHeaders` <a name="PutHttpHeaders" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.putHttpHeaders"></a>

```csharp
private void PutHttpHeaders(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.putHttpHeaders.parameter.value"></a>

- *Type:* object

---

##### `ResetHttpHeaders` <a name="ResetHttpHeaders" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.resetHttpHeaders"></a>

```csharp
private void ResetHttpHeaders()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.httpHeaders">HttpHeaders</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList">GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.httpHeadersInput">HttpHeadersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet">GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpHeaders`<sup>Required</sup> <a name="HttpHeaders" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.httpHeaders"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList HttpHeaders { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList">GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList</a>

---

##### `HttpHeadersInput`<sup>Optional</sup> <a name="HttpHeadersInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.httpHeadersInput"></a>

```csharp
public object HttpHeadersInput { get; }
```

- *Type:* object

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet">GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet</a>

---


### GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference <a name="GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putGrpc">PutGrpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putHttpGet">PutHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putTcpSocket">PutTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetFailureThreshold">ResetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetGrpc">ResetGrpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetHttpGet">ResetHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetInitialDelaySeconds">ResetInitialDelaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetPeriodSeconds">ResetPeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetTcpSocket">ResetTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetTimeoutSeconds">ResetTimeoutSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGrpc` <a name="PutGrpc" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putGrpc"></a>

```csharp
private void PutGrpc(GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putGrpc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc">GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc</a>

---

##### `PutHttpGet` <a name="PutHttpGet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putHttpGet"></a>

```csharp
private void PutHttpGet(GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putHttpGet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet">GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet</a>

---

##### `PutTcpSocket` <a name="PutTcpSocket" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putTcpSocket"></a>

```csharp
private void PutTcpSocket(GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putTcpSocket.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket">GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket</a>

---

##### `ResetFailureThreshold` <a name="ResetFailureThreshold" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetFailureThreshold"></a>

```csharp
private void ResetFailureThreshold()
```

##### `ResetGrpc` <a name="ResetGrpc" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetGrpc"></a>

```csharp
private void ResetGrpc()
```

##### `ResetHttpGet` <a name="ResetHttpGet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetHttpGet"></a>

```csharp
private void ResetHttpGet()
```

##### `ResetInitialDelaySeconds` <a name="ResetInitialDelaySeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetInitialDelaySeconds"></a>

```csharp
private void ResetInitialDelaySeconds()
```

##### `ResetPeriodSeconds` <a name="ResetPeriodSeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetPeriodSeconds"></a>

```csharp
private void ResetPeriodSeconds()
```

##### `ResetTcpSocket` <a name="ResetTcpSocket" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetTcpSocket"></a>

```csharp
private void ResetTcpSocket()
```

##### `ResetTimeoutSeconds` <a name="ResetTimeoutSeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetTimeoutSeconds"></a>

```csharp
private void ResetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.grpc">Grpc</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference">GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.httpGet">HttpGet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference">GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.tcpSocket">TcpSocket</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference">GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.failureThresholdInput">FailureThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.grpcInput">GrpcInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc">GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.httpGetInput">HttpGetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet">GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.initialDelaySecondsInput">InitialDelaySecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.periodSecondsInput">PeriodSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.tcpSocketInput">TcpSocketInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket">GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.timeoutSecondsInput">TimeoutSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.failureThreshold">FailureThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.initialDelaySeconds">InitialDelaySeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.periodSeconds">PeriodSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe">GoogleCloudRunV2ServiceTemplateContainersStartupProbe</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Grpc`<sup>Required</sup> <a name="Grpc" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.grpc"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference Grpc { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference">GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference</a>

---

##### `HttpGet`<sup>Required</sup> <a name="HttpGet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.httpGet"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference HttpGet { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference">GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference</a>

---

##### `TcpSocket`<sup>Required</sup> <a name="TcpSocket" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.tcpSocket"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference TcpSocket { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference">GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference</a>

---

##### `FailureThresholdInput`<sup>Optional</sup> <a name="FailureThresholdInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.failureThresholdInput"></a>

```csharp
public double FailureThresholdInput { get; }
```

- *Type:* double

---

##### `GrpcInput`<sup>Optional</sup> <a name="GrpcInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.grpcInput"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc GrpcInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc">GoogleCloudRunV2ServiceTemplateContainersStartupProbeGrpc</a>

---

##### `HttpGetInput`<sup>Optional</sup> <a name="HttpGetInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.httpGetInput"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet HttpGetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet">GoogleCloudRunV2ServiceTemplateContainersStartupProbeHttpGet</a>

---

##### `InitialDelaySecondsInput`<sup>Optional</sup> <a name="InitialDelaySecondsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.initialDelaySecondsInput"></a>

```csharp
public double InitialDelaySecondsInput { get; }
```

- *Type:* double

---

##### `PeriodSecondsInput`<sup>Optional</sup> <a name="PeriodSecondsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.periodSecondsInput"></a>

```csharp
public double PeriodSecondsInput { get; }
```

- *Type:* double

---

##### `TcpSocketInput`<sup>Optional</sup> <a name="TcpSocketInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.tcpSocketInput"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket TcpSocketInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket">GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket</a>

---

##### `TimeoutSecondsInput`<sup>Optional</sup> <a name="TimeoutSecondsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.timeoutSecondsInput"></a>

```csharp
public double TimeoutSecondsInput { get; }
```

- *Type:* double

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.failureThreshold"></a>

```csharp
public double FailureThreshold { get; }
```

- *Type:* double

---

##### `InitialDelaySeconds`<sup>Required</sup> <a name="InitialDelaySeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.initialDelaySeconds"></a>

```csharp
public double InitialDelaySeconds { get; }
```

- *Type:* double

---

##### `PeriodSeconds`<sup>Required</sup> <a name="PeriodSeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.periodSeconds"></a>

```csharp
public double PeriodSeconds { get; }
```

- *Type:* double

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.timeoutSeconds"></a>

```csharp
public double TimeoutSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersStartupProbe InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbe">GoogleCloudRunV2ServiceTemplateContainersStartupProbe</a>

---


### GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference <a name="GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket">GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket">GoogleCloudRunV2ServiceTemplateContainersStartupProbeTcpSocket</a>

---


### GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList <a name="GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.get"></a>

```csharp
private GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference <a name="GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.mountPathInput">MountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.mountPath">MountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MountPathInput`<sup>Optional</sup> <a name="MountPathInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.mountPathInput"></a>

```csharp
public string MountPathInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.mountPath"></a>

```csharp
public string MountPath { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleCloudRunV2ServiceTemplateOutputReference <a name="GoogleCloudRunV2ServiceTemplateOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.putContainers">PutContainers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.putScaling">PutScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.putVolumes">PutVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.putVpcAccess">PutVpcAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetContainers">ResetContainers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetEncryptionKey">ResetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetExecutionEnvironment">ResetExecutionEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetMaxInstanceRequestConcurrency">ResetMaxInstanceRequestConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetRevision">ResetRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetScaling">ResetScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetSessionAffinity">ResetSessionAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetVolumes">ResetVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetVpcAccess">ResetVpcAccess</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContainers` <a name="PutContainers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.putContainers"></a>

```csharp
private void PutContainers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.putContainers.parameter.value"></a>

- *Type:* object

---

##### `PutScaling` <a name="PutScaling" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.putScaling"></a>

```csharp
private void PutScaling(GoogleCloudRunV2ServiceTemplateScaling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.putScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScaling">GoogleCloudRunV2ServiceTemplateScaling</a>

---

##### `PutVolumes` <a name="PutVolumes" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.putVolumes"></a>

```csharp
private void PutVolumes(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.putVolumes.parameter.value"></a>

- *Type:* object

---

##### `PutVpcAccess` <a name="PutVpcAccess" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.putVpcAccess"></a>

```csharp
private void PutVpcAccess(GoogleCloudRunV2ServiceTemplateVpcAccess Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.putVpcAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccess">GoogleCloudRunV2ServiceTemplateVpcAccess</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetContainers` <a name="ResetContainers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetContainers"></a>

```csharp
private void ResetContainers()
```

##### `ResetEncryptionKey` <a name="ResetEncryptionKey" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetEncryptionKey"></a>

```csharp
private void ResetEncryptionKey()
```

##### `ResetExecutionEnvironment` <a name="ResetExecutionEnvironment" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetExecutionEnvironment"></a>

```csharp
private void ResetExecutionEnvironment()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMaxInstanceRequestConcurrency` <a name="ResetMaxInstanceRequestConcurrency" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetMaxInstanceRequestConcurrency"></a>

```csharp
private void ResetMaxInstanceRequestConcurrency()
```

##### `ResetRevision` <a name="ResetRevision" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetRevision"></a>

```csharp
private void ResetRevision()
```

##### `ResetScaling` <a name="ResetScaling" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetScaling"></a>

```csharp
private void ResetScaling()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetServiceAccount"></a>

```csharp
private void ResetServiceAccount()
```

##### `ResetSessionAffinity` <a name="ResetSessionAffinity" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetSessionAffinity"></a>

```csharp
private void ResetSessionAffinity()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```

##### `ResetVolumes` <a name="ResetVolumes" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetVolumes"></a>

```csharp
private void ResetVolumes()
```

##### `ResetVpcAccess` <a name="ResetVpcAccess" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.resetVpcAccess"></a>

```csharp
private void ResetVpcAccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.containers">Containers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList">GoogleCloudRunV2ServiceTemplateContainersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.scaling">Scaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference">GoogleCloudRunV2ServiceTemplateScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.volumes">Volumes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList">GoogleCloudRunV2ServiceTemplateVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.vpcAccess">VpcAccess</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference">GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.containersInput">ContainersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.encryptionKeyInput">EncryptionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.executionEnvironmentInput">ExecutionEnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.maxInstanceRequestConcurrencyInput">MaxInstanceRequestConcurrencyInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.revisionInput">RevisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.scalingInput">ScalingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScaling">GoogleCloudRunV2ServiceTemplateScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.sessionAffinityInput">SessionAffinityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.volumesInput">VolumesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.vpcAccessInput">VpcAccessInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccess">GoogleCloudRunV2ServiceTemplateVpcAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.encryptionKey">EncryptionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.executionEnvironment">ExecutionEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.maxInstanceRequestConcurrency">MaxInstanceRequestConcurrency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.revision">Revision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.sessionAffinity">SessionAffinity</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.timeout">Timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate">GoogleCloudRunV2ServiceTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Containers`<sup>Required</sup> <a name="Containers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.containers"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateContainersList Containers { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateContainersList">GoogleCloudRunV2ServiceTemplateContainersList</a>

---

##### `Scaling`<sup>Required</sup> <a name="Scaling" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.scaling"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateScalingOutputReference Scaling { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference">GoogleCloudRunV2ServiceTemplateScalingOutputReference</a>

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.volumes"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateVolumesList Volumes { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList">GoogleCloudRunV2ServiceTemplateVolumesList</a>

---

##### `VpcAccess`<sup>Required</sup> <a name="VpcAccess" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.vpcAccess"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference VpcAccess { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference">GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference</a>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ContainersInput`<sup>Optional</sup> <a name="ContainersInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.containersInput"></a>

```csharp
public object ContainersInput { get; }
```

- *Type:* object

---

##### `EncryptionKeyInput`<sup>Optional</sup> <a name="EncryptionKeyInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.encryptionKeyInput"></a>

```csharp
public string EncryptionKeyInput { get; }
```

- *Type:* string

---

##### `ExecutionEnvironmentInput`<sup>Optional</sup> <a name="ExecutionEnvironmentInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.executionEnvironmentInput"></a>

```csharp
public string ExecutionEnvironmentInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaxInstanceRequestConcurrencyInput`<sup>Optional</sup> <a name="MaxInstanceRequestConcurrencyInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.maxInstanceRequestConcurrencyInput"></a>

```csharp
public double MaxInstanceRequestConcurrencyInput { get; }
```

- *Type:* double

---

##### `RevisionInput`<sup>Optional</sup> <a name="RevisionInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.revisionInput"></a>

```csharp
public string RevisionInput { get; }
```

- *Type:* string

---

##### `ScalingInput`<sup>Optional</sup> <a name="ScalingInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.scalingInput"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateScaling ScalingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScaling">GoogleCloudRunV2ServiceTemplateScaling</a>

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `SessionAffinityInput`<sup>Optional</sup> <a name="SessionAffinityInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.sessionAffinityInput"></a>

```csharp
public object SessionAffinityInput { get; }
```

- *Type:* object

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.timeoutInput"></a>

```csharp
public string TimeoutInput { get; }
```

- *Type:* string

---

##### `VolumesInput`<sup>Optional</sup> <a name="VolumesInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.volumesInput"></a>

```csharp
public object VolumesInput { get; }
```

- *Type:* object

---

##### `VpcAccessInput`<sup>Optional</sup> <a name="VpcAccessInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.vpcAccessInput"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateVpcAccess VpcAccessInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccess">GoogleCloudRunV2ServiceTemplateVpcAccess</a>

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.encryptionKey"></a>

```csharp
public string EncryptionKey { get; }
```

- *Type:* string

---

##### `ExecutionEnvironment`<sup>Required</sup> <a name="ExecutionEnvironment" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.executionEnvironment"></a>

```csharp
public string ExecutionEnvironment { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaxInstanceRequestConcurrency`<sup>Required</sup> <a name="MaxInstanceRequestConcurrency" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.maxInstanceRequestConcurrency"></a>

```csharp
public double MaxInstanceRequestConcurrency { get; }
```

- *Type:* double

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.revision"></a>

```csharp
public string Revision { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `SessionAffinity`<sup>Required</sup> <a name="SessionAffinity" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.sessionAffinity"></a>

```csharp
public object SessionAffinity { get; }
```

- *Type:* object

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.timeout"></a>

```csharp
public string Timeout { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudRunV2ServiceTemplate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplate">GoogleCloudRunV2ServiceTemplate</a>

---


### GoogleCloudRunV2ServiceTemplateScalingOutputReference <a name="GoogleCloudRunV2ServiceTemplateScalingOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateScalingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.resetMaxInstanceCount">ResetMaxInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.resetMinInstanceCount">ResetMinInstanceCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxInstanceCount` <a name="ResetMaxInstanceCount" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.resetMaxInstanceCount"></a>

```csharp
private void ResetMaxInstanceCount()
```

##### `ResetMinInstanceCount` <a name="ResetMinInstanceCount" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.resetMinInstanceCount"></a>

```csharp
private void ResetMinInstanceCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.property.maxInstanceCountInput">MaxInstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.property.minInstanceCountInput">MinInstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.property.minInstanceCount">MinInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScaling">GoogleCloudRunV2ServiceTemplateScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInstanceCountInput`<sup>Optional</sup> <a name="MaxInstanceCountInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.property.maxInstanceCountInput"></a>

```csharp
public double MaxInstanceCountInput { get; }
```

- *Type:* double

---

##### `MinInstanceCountInput`<sup>Optional</sup> <a name="MinInstanceCountInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.property.minInstanceCountInput"></a>

```csharp
public double MinInstanceCountInput { get; }
```

- *Type:* double

---

##### `MaxInstanceCount`<sup>Required</sup> <a name="MaxInstanceCount" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.property.maxInstanceCount"></a>

```csharp
public double MaxInstanceCount { get; }
```

- *Type:* double

---

##### `MinInstanceCount`<sup>Required</sup> <a name="MinInstanceCount" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.property.minInstanceCount"></a>

```csharp
public double MinInstanceCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScalingOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateScaling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateScaling">GoogleCloudRunV2ServiceTemplateScaling</a>

---


### GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference <a name="GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.resetInstances">ResetInstances</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstances` <a name="ResetInstances" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.resetInstances"></a>

```csharp
private void ResetInstances()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.instancesInput">InstancesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.instances">Instances</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance">GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstancesInput`<sup>Optional</sup> <a name="InstancesInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.instancesInput"></a>

```csharp
public string[] InstancesInput { get; }
```

- *Type:* string[]

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.instances"></a>

```csharp
public string[] Instances { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance">GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance</a>

---


### GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference <a name="GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.resetMedium">ResetMedium</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.resetSizeLimit">ResetSizeLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMedium` <a name="ResetMedium" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.resetMedium"></a>

```csharp
private void ResetMedium()
```

##### `ResetSizeLimit` <a name="ResetSizeLimit" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.resetSizeLimit"></a>

```csharp
private void ResetSizeLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.property.mediumInput">MediumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.property.sizeLimitInput">SizeLimitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.property.medium">Medium</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.property.sizeLimit">SizeLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDir">GoogleCloudRunV2ServiceTemplateVolumesEmptyDir</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MediumInput`<sup>Optional</sup> <a name="MediumInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.property.mediumInput"></a>

```csharp
public string MediumInput { get; }
```

- *Type:* string

---

##### `SizeLimitInput`<sup>Optional</sup> <a name="SizeLimitInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.property.sizeLimitInput"></a>

```csharp
public string SizeLimitInput { get; }
```

- *Type:* string

---

##### `Medium`<sup>Required</sup> <a name="Medium" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.property.medium"></a>

```csharp
public string Medium { get; }
```

- *Type:* string

---

##### `SizeLimit`<sup>Required</sup> <a name="SizeLimit" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.property.sizeLimit"></a>

```csharp
public string SizeLimit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateVolumesEmptyDir InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDir">GoogleCloudRunV2ServiceTemplateVolumesEmptyDir</a>

---


### GoogleCloudRunV2ServiceTemplateVolumesList <a name="GoogleCloudRunV2ServiceTemplateVolumesList" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateVolumesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.get"></a>

```csharp
private GoogleCloudRunV2ServiceTemplateVolumesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleCloudRunV2ServiceTemplateVolumesOutputReference <a name="GoogleCloudRunV2ServiceTemplateVolumesOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateVolumesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.putCloudSqlInstance">PutCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.putEmptyDir">PutEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.putSecret">PutSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.resetCloudSqlInstance">ResetCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.resetEmptyDir">ResetEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.resetSecret">ResetSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudSqlInstance` <a name="PutCloudSqlInstance" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.putCloudSqlInstance"></a>

```csharp
private void PutCloudSqlInstance(GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.putCloudSqlInstance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance">GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance</a>

---

##### `PutEmptyDir` <a name="PutEmptyDir" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.putEmptyDir"></a>

```csharp
private void PutEmptyDir(GoogleCloudRunV2ServiceTemplateVolumesEmptyDir Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.putEmptyDir.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDir">GoogleCloudRunV2ServiceTemplateVolumesEmptyDir</a>

---

##### `PutSecret` <a name="PutSecret" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.putSecret"></a>

```csharp
private void PutSecret(GoogleCloudRunV2ServiceTemplateVolumesSecret Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.putSecret.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecret">GoogleCloudRunV2ServiceTemplateVolumesSecret</a>

---

##### `ResetCloudSqlInstance` <a name="ResetCloudSqlInstance" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.resetCloudSqlInstance"></a>

```csharp
private void ResetCloudSqlInstance()
```

##### `ResetEmptyDir` <a name="ResetEmptyDir" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.resetEmptyDir"></a>

```csharp
private void ResetEmptyDir()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.resetSecret"></a>

```csharp
private void ResetSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.cloudSqlInstance">CloudSqlInstance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference">GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.emptyDir">EmptyDir</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference">GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.secret">Secret</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference">GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.cloudSqlInstanceInput">CloudSqlInstanceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance">GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.emptyDirInput">EmptyDirInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDir">GoogleCloudRunV2ServiceTemplateVolumesEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.secretInput">SecretInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecret">GoogleCloudRunV2ServiceTemplateVolumesSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudSqlInstance`<sup>Required</sup> <a name="CloudSqlInstance" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.cloudSqlInstance"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference CloudSqlInstance { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference">GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference</a>

---

##### `EmptyDir`<sup>Required</sup> <a name="EmptyDir" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.emptyDir"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference EmptyDir { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference">GoogleCloudRunV2ServiceTemplateVolumesEmptyDirOutputReference</a>

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.secret"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference Secret { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference">GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference</a>

---

##### `CloudSqlInstanceInput`<sup>Optional</sup> <a name="CloudSqlInstanceInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.cloudSqlInstanceInput"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance CloudSqlInstanceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance">GoogleCloudRunV2ServiceTemplateVolumesCloudSqlInstance</a>

---

##### `EmptyDirInput`<sup>Optional</sup> <a name="EmptyDirInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.emptyDirInput"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateVolumesEmptyDir EmptyDirInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesEmptyDir">GoogleCloudRunV2ServiceTemplateVolumesEmptyDir</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.secretInput"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateVolumesSecret SecretInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecret">GoogleCloudRunV2ServiceTemplateVolumesSecret</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList <a name="GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.get"></a>

```csharp
private GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference <a name="GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.modeInput">ModeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.mode">Mode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.modeInput"></a>

```csharp
public double ModeInput { get; }
```

- *Type:* double

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.mode"></a>

```csharp
public double Mode { get; }
```

- *Type:* double

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference <a name="GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.putItems">PutItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.resetDefaultMode">ResetDefaultMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.resetItems">ResetItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutItems` <a name="PutItems" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.putItems"></a>

```csharp
private void PutItems(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.putItems.parameter.value"></a>

- *Type:* object

---

##### `ResetDefaultMode` <a name="ResetDefaultMode" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.resetDefaultMode"></a>

```csharp
private void ResetDefaultMode()
```

##### `ResetItems` <a name="ResetItems" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.resetItems"></a>

```csharp
private void ResetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.property.items">Items</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList">GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.property.defaultModeInput">DefaultModeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.property.itemsInput">ItemsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.property.secretInput">SecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.property.defaultMode">DefaultMode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.property.secret">Secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecret">GoogleCloudRunV2ServiceTemplateVolumesSecret</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.property.items"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList Items { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList">GoogleCloudRunV2ServiceTemplateVolumesSecretItemsList</a>

---

##### `DefaultModeInput`<sup>Optional</sup> <a name="DefaultModeInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.property.defaultModeInput"></a>

```csharp
public double DefaultModeInput { get; }
```

- *Type:* double

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.property.itemsInput"></a>

```csharp
public object ItemsInput { get; }
```

- *Type:* object

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.property.secretInput"></a>

```csharp
public string SecretInput { get; }
```

- *Type:* string

---

##### `DefaultMode`<sup>Required</sup> <a name="DefaultMode" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.property.defaultMode"></a>

```csharp
public double DefaultMode { get; }
```

- *Type:* double

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.property.secret"></a>

```csharp
public string Secret { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecretOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateVolumesSecret InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVolumesSecret">GoogleCloudRunV2ServiceTemplateVolumesSecret</a>

---


### GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference <a name="GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.resetConnector">ResetConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.resetEgress">ResetEgress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnector` <a name="ResetConnector" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.resetConnector"></a>

```csharp
private void ResetConnector()
```

##### `ResetEgress` <a name="ResetEgress" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.resetEgress"></a>

```csharp
private void ResetEgress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.property.connectorInput">ConnectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.property.egressInput">EgressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.property.connector">Connector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.property.egress">Egress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccess">GoogleCloudRunV2ServiceTemplateVpcAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectorInput`<sup>Optional</sup> <a name="ConnectorInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.property.connectorInput"></a>

```csharp
public string ConnectorInput { get; }
```

- *Type:* string

---

##### `EgressInput`<sup>Optional</sup> <a name="EgressInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.property.egressInput"></a>

```csharp
public string EgressInput { get; }
```

- *Type:* string

---

##### `Connector`<sup>Required</sup> <a name="Connector" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.property.connector"></a>

```csharp
public string Connector { get; }
```

- *Type:* string

---

##### `Egress`<sup>Required</sup> <a name="Egress" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.property.egress"></a>

```csharp
public string Egress { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccessOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudRunV2ServiceTemplateVpcAccess InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTemplateVpcAccess">GoogleCloudRunV2ServiceTemplateVpcAccess</a>

---


### GoogleCloudRunV2ServiceTerminalConditionList <a name="GoogleCloudRunV2ServiceTerminalConditionList" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTerminalConditionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList.get"></a>

```csharp
private GoogleCloudRunV2ServiceTerminalConditionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleCloudRunV2ServiceTerminalConditionOutputReference <a name="GoogleCloudRunV2ServiceTerminalConditionOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTerminalConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.executionReason">ExecutionReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.lastTransitionTime">LastTransitionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.reason">Reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.revisionReason">RevisionReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalCondition">GoogleCloudRunV2ServiceTerminalCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExecutionReason`<sup>Required</sup> <a name="ExecutionReason" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.executionReason"></a>

```csharp
public string ExecutionReason { get; }
```

- *Type:* string

---

##### `LastTransitionTime`<sup>Required</sup> <a name="LastTransitionTime" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.lastTransitionTime"></a>

```csharp
public string LastTransitionTime { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.reason"></a>

```csharp
public string Reason { get; }
```

- *Type:* string

---

##### `RevisionReason`<sup>Required</sup> <a name="RevisionReason" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.revisionReason"></a>

```csharp
public string RevisionReason { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalConditionOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudRunV2ServiceTerminalCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTerminalCondition">GoogleCloudRunV2ServiceTerminalCondition</a>

---


### GoogleCloudRunV2ServiceTimeoutsOutputReference <a name="GoogleCloudRunV2ServiceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleCloudRunV2ServiceTrafficList <a name="GoogleCloudRunV2ServiceTrafficList" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTrafficList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.get"></a>

```csharp
private GoogleCloudRunV2ServiceTrafficOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleCloudRunV2ServiceTrafficOutputReference <a name="GoogleCloudRunV2ServiceTrafficOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTrafficOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.resetPercent">ResetPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.resetRevision">ResetRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.resetTag">ResetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPercent` <a name="ResetPercent" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.resetPercent"></a>

```csharp
private void ResetPercent()
```

##### `ResetRevision` <a name="ResetRevision" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.resetRevision"></a>

```csharp
private void ResetRevision()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.resetTag"></a>

```csharp
private void ResetTag()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.percentInput">PercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.revisionInput">RevisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.tagInput">TagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.percent">Percent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.revision">Revision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PercentInput`<sup>Optional</sup> <a name="PercentInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.percentInput"></a>

```csharp
public double PercentInput { get; }
```

- *Type:* double

---

##### `RevisionInput`<sup>Optional</sup> <a name="RevisionInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.revisionInput"></a>

```csharp
public string RevisionInput { get; }
```

- *Type:* string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.tagInput"></a>

```csharp
public string TagInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Percent`<sup>Required</sup> <a name="Percent" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.percent"></a>

```csharp
public double Percent { get; }
```

- *Type:* double

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.revision"></a>

```csharp
public string Revision { get; }
```

- *Type:* string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleCloudRunV2ServiceTrafficStatusesList <a name="GoogleCloudRunV2ServiceTrafficStatusesList" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTrafficStatusesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList.get"></a>

```csharp
private GoogleCloudRunV2ServiceTrafficStatusesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleCloudRunV2ServiceTrafficStatusesOutputReference <a name="GoogleCloudRunV2ServiceTrafficStatusesOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudRunV2ServiceTrafficStatusesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.property.percent">Percent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.property.revision">Revision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatuses">GoogleCloudRunV2ServiceTrafficStatuses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Percent`<sup>Required</sup> <a name="Percent" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.property.percent"></a>

```csharp
public double Percent { get; }
```

- *Type:* double

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.property.revision"></a>

```csharp
public string Revision { get; }
```

- *Type:* string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatusesOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudRunV2ServiceTrafficStatuses InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Service.GoogleCloudRunV2ServiceTrafficStatuses">GoogleCloudRunV2ServiceTrafficStatuses</a>

---



