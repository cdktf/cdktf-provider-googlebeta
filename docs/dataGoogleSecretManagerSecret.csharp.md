# `data_google_secret_manager_secret`

Refer to the Terraform Registory for docs: [`data_google_secret_manager_secret`](https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/data-sources/google_secret_manager_secret).

# `dataGoogleSecretManagerSecret` Submodule <a name="`dataGoogleSecretManagerSecret` Submodule" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleSecretManagerSecret <a name="DataGoogleSecretManagerSecret" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/data-sources/google_secret_manager_secret google_secret_manager_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleSecretManagerSecret(Construct Scope, string Id, DataGoogleSecretManagerSecretConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig">DataGoogleSecretManagerSecretConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig">DataGoogleSecretManagerSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleSecretManagerSecret.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleSecretManagerSecret.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

DataGoogleSecretManagerSecret.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.expireTime">ExpireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.labels">Labels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.replication">Replication</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList">DataGoogleSecretManagerSecretReplicationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.rotation">Rotation</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList">DataGoogleSecretManagerSecretRotationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.topics">Topics</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList">DataGoogleSecretManagerSecretTopicsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.ttl">Ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.secretIdInput">SecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.expireTime"></a>

```csharp
public string ExpireTime { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.labels"></a>

```csharp
public StringMap Labels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Replication`<sup>Required</sup> <a name="Replication" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.replication"></a>

```csharp
public DataGoogleSecretManagerSecretReplicationList Replication { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList">DataGoogleSecretManagerSecretReplicationList</a>

---

##### `Rotation`<sup>Required</sup> <a name="Rotation" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.rotation"></a>

```csharp
public DataGoogleSecretManagerSecretRotationList Rotation { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList">DataGoogleSecretManagerSecretRotationList</a>

---

##### `Topics`<sup>Required</sup> <a name="Topics" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.topics"></a>

```csharp
public DataGoogleSecretManagerSecretTopicsList Topics { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList">DataGoogleSecretManagerSecretTopicsList</a>

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.ttl"></a>

```csharp
public string Ttl { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.secretIdInput"></a>

```csharp
public string SecretIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecret.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleSecretManagerSecretConfig <a name="DataGoogleSecretManagerSecretConfig" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleSecretManagerSecretConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string SecretId,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.secretId">SecretId</a></code> | <code>string</code> | This must be unique within the project. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/data-sources/google_secret_manager_secret#id DataGoogleSecretManagerSecret#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/data-sources/google_secret_manager_secret#project DataGoogleSecretManagerSecret#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.secretId"></a>

```csharp
public string SecretId { get; set; }
```

- *Type:* string

This must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/data-sources/google_secret_manager_secret#secret_id DataGoogleSecretManagerSecret#secret_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/data-sources/google_secret_manager_secret#id DataGoogleSecretManagerSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/data-sources/google_secret_manager_secret#project DataGoogleSecretManagerSecret#project}.

---

### DataGoogleSecretManagerSecretReplication <a name="DataGoogleSecretManagerSecretReplication" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleSecretManagerSecretReplication {

};
```


### DataGoogleSecretManagerSecretReplicationUserManaged <a name="DataGoogleSecretManagerSecretReplicationUserManaged" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManaged"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManaged.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleSecretManagerSecretReplicationUserManaged {

};
```


### DataGoogleSecretManagerSecretReplicationUserManagedReplicas <a name="DataGoogleSecretManagerSecretReplicationUserManagedReplicas" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicas.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleSecretManagerSecretReplicationUserManagedReplicas {

};
```


### DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption <a name="DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption {

};
```


### DataGoogleSecretManagerSecretRotation <a name="DataGoogleSecretManagerSecretRotation" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleSecretManagerSecretRotation {

};
```


### DataGoogleSecretManagerSecretTopics <a name="DataGoogleSecretManagerSecretTopics" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleSecretManagerSecretTopics {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleSecretManagerSecretReplicationList <a name="DataGoogleSecretManagerSecretReplicationList" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleSecretManagerSecretReplicationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.get"></a>

```csharp
private DataGoogleSecretManagerSecretReplicationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleSecretManagerSecretReplicationOutputReference <a name="DataGoogleSecretManagerSecretReplicationOutputReference" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleSecretManagerSecretReplicationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.property.automatic">Automatic</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.property.userManaged">UserManaged</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList">DataGoogleSecretManagerSecretReplicationUserManagedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplication">DataGoogleSecretManagerSecretReplication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Automatic`<sup>Required</sup> <a name="Automatic" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.property.automatic"></a>

```csharp
public IResolvable Automatic { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `UserManaged`<sup>Required</sup> <a name="UserManaged" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.property.userManaged"></a>

```csharp
public DataGoogleSecretManagerSecretReplicationUserManagedList UserManaged { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList">DataGoogleSecretManagerSecretReplicationUserManagedList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationOutputReference.property.internalValue"></a>

```csharp
public DataGoogleSecretManagerSecretReplication InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplication">DataGoogleSecretManagerSecretReplication</a>

---


### DataGoogleSecretManagerSecretReplicationUserManagedList <a name="DataGoogleSecretManagerSecretReplicationUserManagedList" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleSecretManagerSecretReplicationUserManagedList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.get"></a>

```csharp
private DataGoogleSecretManagerSecretReplicationUserManagedOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleSecretManagerSecretReplicationUserManagedOutputReference <a name="DataGoogleSecretManagerSecretReplicationUserManagedOutputReference" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleSecretManagerSecretReplicationUserManagedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.property.replicas">Replicas</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList">DataGoogleSecretManagerSecretReplicationUserManagedReplicasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManaged">DataGoogleSecretManagerSecretReplicationUserManaged</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Replicas`<sup>Required</sup> <a name="Replicas" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.property.replicas"></a>

```csharp
public DataGoogleSecretManagerSecretReplicationUserManagedReplicasList Replicas { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList">DataGoogleSecretManagerSecretReplicationUserManagedReplicasList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedOutputReference.property.internalValue"></a>

```csharp
public DataGoogleSecretManagerSecretReplicationUserManaged InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManaged">DataGoogleSecretManagerSecretReplicationUserManaged</a>

---


### DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList <a name="DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.get"></a>

```csharp
private DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference <a name="DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption">DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.internalValue"></a>

```csharp
public DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption">DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption</a>

---


### DataGoogleSecretManagerSecretReplicationUserManagedReplicasList <a name="DataGoogleSecretManagerSecretReplicationUserManagedReplicasList" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleSecretManagerSecretReplicationUserManagedReplicasList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.get"></a>

```csharp
private DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference <a name="DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.property.customerManagedEncryption">CustomerManagedEncryption</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList">DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicas">DataGoogleSecretManagerSecretReplicationUserManagedReplicas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomerManagedEncryption`<sup>Required</sup> <a name="CustomerManagedEncryption" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.property.customerManagedEncryption"></a>

```csharp
public DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList CustomerManagedEncryption { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList">DataGoogleSecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionList</a>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicasOutputReference.property.internalValue"></a>

```csharp
public DataGoogleSecretManagerSecretReplicationUserManagedReplicas InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretReplicationUserManagedReplicas">DataGoogleSecretManagerSecretReplicationUserManagedReplicas</a>

---


### DataGoogleSecretManagerSecretRotationList <a name="DataGoogleSecretManagerSecretRotationList" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleSecretManagerSecretRotationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.get"></a>

```csharp
private DataGoogleSecretManagerSecretRotationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleSecretManagerSecretRotationOutputReference <a name="DataGoogleSecretManagerSecretRotationOutputReference" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleSecretManagerSecretRotationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.property.nextRotationTime">NextRotationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.property.rotationPeriod">RotationPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotation">DataGoogleSecretManagerSecretRotation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NextRotationTime`<sup>Required</sup> <a name="NextRotationTime" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.property.nextRotationTime"></a>

```csharp
public string NextRotationTime { get; }
```

- *Type:* string

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.property.rotationPeriod"></a>

```csharp
public string RotationPeriod { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotationOutputReference.property.internalValue"></a>

```csharp
public DataGoogleSecretManagerSecretRotation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretRotation">DataGoogleSecretManagerSecretRotation</a>

---


### DataGoogleSecretManagerSecretTopicsList <a name="DataGoogleSecretManagerSecretTopicsList" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleSecretManagerSecretTopicsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.get"></a>

```csharp
private DataGoogleSecretManagerSecretTopicsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleSecretManagerSecretTopicsOutputReference <a name="DataGoogleSecretManagerSecretTopicsOutputReference" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new DataGoogleSecretManagerSecretTopicsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopics">DataGoogleSecretManagerSecretTopics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopicsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleSecretManagerSecretTopics InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleSecretManagerSecret.DataGoogleSecretManagerSecretTopics">DataGoogleSecretManagerSecretTopics</a>

---



