# `google_dataproc_metastore_service_iam_policy`

Refer to the Terraform Registory for docs: [`google_dataproc_metastore_service_iam_policy`](https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_dataproc_metastore_service_iam_policy).

# `googleDataprocMetastoreServiceIamPolicy` Submodule <a name="`googleDataprocMetastoreServiceIamPolicy` Submodule" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataprocMetastoreServiceIamPolicy <a name="GoogleDataprocMetastoreServiceIamPolicy" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_dataproc_metastore_service_iam_policy google_dataproc_metastore_service_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataprocMetastoreServiceIamPolicy(Construct Scope, string Id, GoogleDataprocMetastoreServiceIamPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicyConfig">GoogleDataprocMetastoreServiceIamPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicyConfig">GoogleDataprocMetastoreServiceIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDataprocMetastoreServiceIamPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDataprocMetastoreServiceIamPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDataprocMetastoreServiceIamPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.policyDataInput">PolicyDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.serviceIdInput">ServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.policyData">PolicyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.serviceId">ServiceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `PolicyDataInput`<sup>Optional</sup> <a name="PolicyDataInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.policyDataInput"></a>

```csharp
public string PolicyDataInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ServiceIdInput`<sup>Optional</sup> <a name="ServiceIdInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.serviceIdInput"></a>

```csharp
public string ServiceIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.policyData"></a>

```csharp
public string PolicyData { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.serviceId"></a>

```csharp
public string ServiceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataprocMetastoreServiceIamPolicyConfig <a name="GoogleDataprocMetastoreServiceIamPolicyConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataprocMetastoreServiceIamPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string PolicyData,
    string ServiceId,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicyConfig.property.policyData">PolicyData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_dataproc_metastore_service_iam_policy#policy_data GoogleDataprocMetastoreServiceIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicyConfig.property.serviceId">ServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_dataproc_metastore_service_iam_policy#service_id GoogleDataprocMetastoreServiceIamPolicy#service_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_dataproc_metastore_service_iam_policy#id GoogleDataprocMetastoreServiceIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicyConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_dataproc_metastore_service_iam_policy#location GoogleDataprocMetastoreServiceIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_dataproc_metastore_service_iam_policy#project GoogleDataprocMetastoreServiceIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicyConfig.property.policyData"></a>

```csharp
public string PolicyData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_dataproc_metastore_service_iam_policy#policy_data GoogleDataprocMetastoreServiceIamPolicy#policy_data}.

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicyConfig.property.serviceId"></a>

```csharp
public string ServiceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_dataproc_metastore_service_iam_policy#service_id GoogleDataprocMetastoreServiceIamPolicy#service_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_dataproc_metastore_service_iam_policy#id GoogleDataprocMetastoreServiceIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicyConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_dataproc_metastore_service_iam_policy#location GoogleDataprocMetastoreServiceIamPolicy#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataprocMetastoreServiceIamPolicy.GoogleDataprocMetastoreServiceIamPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.82.0/docs/resources/google_dataproc_metastore_service_iam_policy#project GoogleDataprocMetastoreServiceIamPolicy#project}.

---



