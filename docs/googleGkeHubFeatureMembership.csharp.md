# `googleGkeHubFeatureMembership` Submodule <a name="`googleGkeHubFeatureMembership` Submodule" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGkeHubFeatureMembership <a name="GoogleGkeHubFeatureMembership" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership"></a>

Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership google_gke_hub_feature_membership}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeHubFeatureMembership(Construct Scope, string Id, GoogleGkeHubFeatureMembershipConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig">GoogleGkeHubFeatureMembershipConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig">GoogleGkeHubFeatureMembershipConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.putConfigmanagement">PutConfigmanagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.putMesh">PutMesh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.resetConfigmanagement">ResetConfigmanagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.resetMesh">ResetMesh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutConfigmanagement` <a name="PutConfigmanagement" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.putConfigmanagement"></a>

```csharp
private void PutConfigmanagement(GoogleGkeHubFeatureMembershipConfigmanagement Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.putConfigmanagement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagement">GoogleGkeHubFeatureMembershipConfigmanagement</a>

---

##### `PutMesh` <a name="PutMesh" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.putMesh"></a>

```csharp
private void PutMesh(GoogleGkeHubFeatureMembershipMesh Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.putMesh.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMesh">GoogleGkeHubFeatureMembershipMesh</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleGkeHubFeatureMembershipTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeouts">GoogleGkeHubFeatureMembershipTimeouts</a>

---

##### `ResetConfigmanagement` <a name="ResetConfigmanagement" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.resetConfigmanagement"></a>

```csharp
private void ResetConfigmanagement()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMesh` <a name="ResetMesh" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.resetMesh"></a>

```csharp
private void ResetMesh()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleGkeHubFeatureMembership.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleGkeHubFeatureMembership.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleGkeHubFeatureMembership.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.configmanagement">Configmanagement</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference">GoogleGkeHubFeatureMembershipConfigmanagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.mesh">Mesh</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference">GoogleGkeHubFeatureMembershipMeshOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference">GoogleGkeHubFeatureMembershipTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.configmanagementInput">ConfigmanagementInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagement">GoogleGkeHubFeatureMembershipConfigmanagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.featureInput">FeatureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.membershipInput">MembershipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.meshInput">MeshInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMesh">GoogleGkeHubFeatureMembershipMesh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.feature">Feature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.membership">Membership</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Configmanagement`<sup>Required</sup> <a name="Configmanagement" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.configmanagement"></a>

```csharp
public GoogleGkeHubFeatureMembershipConfigmanagementOutputReference Configmanagement { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference">GoogleGkeHubFeatureMembershipConfigmanagementOutputReference</a>

---

##### `Mesh`<sup>Required</sup> <a name="Mesh" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.mesh"></a>

```csharp
public GoogleGkeHubFeatureMembershipMeshOutputReference Mesh { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference">GoogleGkeHubFeatureMembershipMeshOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.timeouts"></a>

```csharp
public GoogleGkeHubFeatureMembershipTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference">GoogleGkeHubFeatureMembershipTimeoutsOutputReference</a>

---

##### `ConfigmanagementInput`<sup>Optional</sup> <a name="ConfigmanagementInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.configmanagementInput"></a>

```csharp
public GoogleGkeHubFeatureMembershipConfigmanagement ConfigmanagementInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagement">GoogleGkeHubFeatureMembershipConfigmanagement</a>

---

##### `FeatureInput`<sup>Optional</sup> <a name="FeatureInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.featureInput"></a>

```csharp
public string FeatureInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MembershipInput`<sup>Optional</sup> <a name="MembershipInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.membershipInput"></a>

```csharp
public string MembershipInput { get; }
```

- *Type:* string

---

##### `MeshInput`<sup>Optional</sup> <a name="MeshInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.meshInput"></a>

```csharp
public GoogleGkeHubFeatureMembershipMesh MeshInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMesh">GoogleGkeHubFeatureMembershipMesh</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Feature`<sup>Required</sup> <a name="Feature" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.feature"></a>

```csharp
public string Feature { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Membership`<sup>Required</sup> <a name="Membership" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.membership"></a>

```csharp
public string Membership { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembership.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGkeHubFeatureMembershipConfig <a name="GoogleGkeHubFeatureMembershipConfig" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeHubFeatureMembershipConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Feature,
    string Location,
    string Membership,
    GoogleGkeHubFeatureMembershipConfigmanagement Configmanagement = null,
    string Id = null,
    GoogleGkeHubFeatureMembershipMesh Mesh = null,
    string Project = null,
    GoogleGkeHubFeatureMembershipTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.feature">Feature</a></code> | <code>string</code> | The name of the feature. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.location">Location</a></code> | <code>string</code> | The location of the feature. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.membership">Membership</a></code> | <code>string</code> | The name of the membership. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.configmanagement">Configmanagement</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagement">GoogleGkeHubFeatureMembershipConfigmanagement</a></code> | configmanagement block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#id GoogleGkeHubFeatureMembership#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.mesh">Mesh</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMesh">GoogleGkeHubFeatureMembershipMesh</a></code> | mesh block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.project">Project</a></code> | <code>string</code> | The project of the feature. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeouts">GoogleGkeHubFeatureMembershipTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Feature`<sup>Required</sup> <a name="Feature" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.feature"></a>

```csharp
public string Feature { get; set; }
```

- *Type:* string

The name of the feature.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#feature GoogleGkeHubFeatureMembership#feature}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the feature.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#location GoogleGkeHubFeatureMembership#location}

---

##### `Membership`<sup>Required</sup> <a name="Membership" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.membership"></a>

```csharp
public string Membership { get; set; }
```

- *Type:* string

The name of the membership.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#membership GoogleGkeHubFeatureMembership#membership}

---

##### `Configmanagement`<sup>Optional</sup> <a name="Configmanagement" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.configmanagement"></a>

```csharp
public GoogleGkeHubFeatureMembershipConfigmanagement Configmanagement { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagement">GoogleGkeHubFeatureMembershipConfigmanagement</a>

configmanagement block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#configmanagement GoogleGkeHubFeatureMembership#configmanagement}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#id GoogleGkeHubFeatureMembership#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Mesh`<sup>Optional</sup> <a name="Mesh" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.mesh"></a>

```csharp
public GoogleGkeHubFeatureMembershipMesh Mesh { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMesh">GoogleGkeHubFeatureMembershipMesh</a>

mesh block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#mesh GoogleGkeHubFeatureMembership#mesh}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The project of the feature.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#project GoogleGkeHubFeatureMembership#project}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfig.property.timeouts"></a>

```csharp
public GoogleGkeHubFeatureMembershipTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeouts">GoogleGkeHubFeatureMembershipTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#timeouts GoogleGkeHubFeatureMembership#timeouts}

---

### GoogleGkeHubFeatureMembershipConfigmanagement <a name="GoogleGkeHubFeatureMembershipConfigmanagement" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeHubFeatureMembershipConfigmanagement {
    GoogleGkeHubFeatureMembershipConfigmanagementBinauthz Binauthz = null,
    GoogleGkeHubFeatureMembershipConfigmanagementConfigSync ConfigSync = null,
    GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController HierarchyController = null,
    GoogleGkeHubFeatureMembershipConfigmanagementPolicyController PolicyController = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagement.property.binauthz">Binauthz</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthz">GoogleGkeHubFeatureMembershipConfigmanagementBinauthz</a></code> | binauthz block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagement.property.configSync">ConfigSync</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSync">GoogleGkeHubFeatureMembershipConfigmanagementConfigSync</a></code> | config_sync block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagement.property.hierarchyController">HierarchyController</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController">GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController</a></code> | hierarchy_controller block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagement.property.policyController">PolicyController</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController">GoogleGkeHubFeatureMembershipConfigmanagementPolicyController</a></code> | policy_controller block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagement.property.version">Version</a></code> | <code>string</code> | Optional. Version of ACM to install. Defaults to the latest version. |

---

##### `Binauthz`<sup>Optional</sup> <a name="Binauthz" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagement.property.binauthz"></a>

```csharp
public GoogleGkeHubFeatureMembershipConfigmanagementBinauthz Binauthz { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthz">GoogleGkeHubFeatureMembershipConfigmanagementBinauthz</a>

binauthz block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#binauthz GoogleGkeHubFeatureMembership#binauthz}

---

##### `ConfigSync`<sup>Optional</sup> <a name="ConfigSync" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagement.property.configSync"></a>

```csharp
public GoogleGkeHubFeatureMembershipConfigmanagementConfigSync ConfigSync { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSync">GoogleGkeHubFeatureMembershipConfigmanagementConfigSync</a>

config_sync block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#config_sync GoogleGkeHubFeatureMembership#config_sync}

---

##### `HierarchyController`<sup>Optional</sup> <a name="HierarchyController" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagement.property.hierarchyController"></a>

```csharp
public GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController HierarchyController { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController">GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController</a>

hierarchy_controller block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#hierarchy_controller GoogleGkeHubFeatureMembership#hierarchy_controller}

---

##### `PolicyController`<sup>Optional</sup> <a name="PolicyController" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagement.property.policyController"></a>

```csharp
public GoogleGkeHubFeatureMembershipConfigmanagementPolicyController PolicyController { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController">GoogleGkeHubFeatureMembershipConfigmanagementPolicyController</a>

policy_controller block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#policy_controller GoogleGkeHubFeatureMembership#policy_controller}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagement.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Optional. Version of ACM to install. Defaults to the latest version.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#version GoogleGkeHubFeatureMembership#version}

---

### GoogleGkeHubFeatureMembershipConfigmanagementBinauthz <a name="GoogleGkeHubFeatureMembershipConfigmanagementBinauthz" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthz"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthz.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeHubFeatureMembershipConfigmanagementBinauthz {
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthz.property.enabled">Enabled</a></code> | <code>object</code> | Whether binauthz is enabled in this cluster. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthz.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether binauthz is enabled in this cluster.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#enabled GoogleGkeHubFeatureMembership#enabled}

---

### GoogleGkeHubFeatureMembershipConfigmanagementConfigSync <a name="GoogleGkeHubFeatureMembershipConfigmanagementConfigSync" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSync"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSync.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeHubFeatureMembershipConfigmanagementConfigSync {
    GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit Git = null,
    GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci Oci = null,
    object PreventDrift = null,
    string SourceFormat = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSync.property.git">Git</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit">GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit</a></code> | git block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSync.property.oci">Oci</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci">GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci</a></code> | oci block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSync.property.preventDrift">PreventDrift</a></code> | <code>object</code> | Set to true to enable the Config Sync admission webhook to prevent drifts. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSync.property.sourceFormat">SourceFormat</a></code> | <code>string</code> | Specifies whether the Config Sync Repo is in "hierarchical" or "unstructured" mode. |

---

##### `Git`<sup>Optional</sup> <a name="Git" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSync.property.git"></a>

```csharp
public GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit Git { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit">GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit</a>

git block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#git GoogleGkeHubFeatureMembership#git}

---

##### `Oci`<sup>Optional</sup> <a name="Oci" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSync.property.oci"></a>

```csharp
public GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci Oci { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci">GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci</a>

oci block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#oci GoogleGkeHubFeatureMembership#oci}

---

##### `PreventDrift`<sup>Optional</sup> <a name="PreventDrift" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSync.property.preventDrift"></a>

```csharp
public object PreventDrift { get; set; }
```

- *Type:* object

Set to true to enable the Config Sync admission webhook to prevent drifts.

If set to `false`, disables the Config Sync admission webhook and does not prevent drifts.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#prevent_drift GoogleGkeHubFeatureMembership#prevent_drift}

---

##### `SourceFormat`<sup>Optional</sup> <a name="SourceFormat" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSync.property.sourceFormat"></a>

```csharp
public string SourceFormat { get; set; }
```

- *Type:* string

Specifies whether the Config Sync Repo is in "hierarchical" or "unstructured" mode.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#source_format GoogleGkeHubFeatureMembership#source_format}

---

### GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit <a name="GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit {
    string GcpServiceAccountEmail = null,
    string HttpsProxy = null,
    string PolicyDir = null,
    string SecretType = null,
    string SyncBranch = null,
    string SyncRepo = null,
    string SyncRev = null,
    string SyncWaitSecs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.gcpServiceAccountEmail">GcpServiceAccountEmail</a></code> | <code>string</code> | The GCP Service Account Email used for auth when secretType is gcpServiceAccount. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.httpsProxy">HttpsProxy</a></code> | <code>string</code> | URL for the HTTPS proxy to be used when communicating with the Git repo. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.policyDir">PolicyDir</a></code> | <code>string</code> | The path within the Git repository that represents the top level of the repo to sync. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.secretType">SecretType</a></code> | <code>string</code> | Type of secret configured for access to the Git repo. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.syncBranch">SyncBranch</a></code> | <code>string</code> | The branch of the repository to sync from. Default: master. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.syncRepo">SyncRepo</a></code> | <code>string</code> | The URL of the Git repository to use as the source of truth. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.syncRev">SyncRev</a></code> | <code>string</code> | Git revision (tag or hash) to check out. Default HEAD. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.syncWaitSecs">SyncWaitSecs</a></code> | <code>string</code> | Period in seconds between consecutive syncs. Default: 15. |

---

##### `GcpServiceAccountEmail`<sup>Optional</sup> <a name="GcpServiceAccountEmail" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.gcpServiceAccountEmail"></a>

```csharp
public string GcpServiceAccountEmail { get; set; }
```

- *Type:* string

The GCP Service Account Email used for auth when secretType is gcpServiceAccount.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#gcp_service_account_email GoogleGkeHubFeatureMembership#gcp_service_account_email}

---

##### `HttpsProxy`<sup>Optional</sup> <a name="HttpsProxy" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.httpsProxy"></a>

```csharp
public string HttpsProxy { get; set; }
```

- *Type:* string

URL for the HTTPS proxy to be used when communicating with the Git repo.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#https_proxy GoogleGkeHubFeatureMembership#https_proxy}

---

##### `PolicyDir`<sup>Optional</sup> <a name="PolicyDir" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.policyDir"></a>

```csharp
public string PolicyDir { get; set; }
```

- *Type:* string

The path within the Git repository that represents the top level of the repo to sync.

Default: the root directory of the repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#policy_dir GoogleGkeHubFeatureMembership#policy_dir}

---

##### `SecretType`<sup>Optional</sup> <a name="SecretType" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.secretType"></a>

```csharp
public string SecretType { get; set; }
```

- *Type:* string

Type of secret configured for access to the Git repo.

Must be one of ssh, cookiefile, gcenode, token, gcpserviceaccount or none. The validation of this is case-sensitive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#secret_type GoogleGkeHubFeatureMembership#secret_type}

---

##### `SyncBranch`<sup>Optional</sup> <a name="SyncBranch" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.syncBranch"></a>

```csharp
public string SyncBranch { get; set; }
```

- *Type:* string

The branch of the repository to sync from. Default: master.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#sync_branch GoogleGkeHubFeatureMembership#sync_branch}

---

##### `SyncRepo`<sup>Optional</sup> <a name="SyncRepo" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.syncRepo"></a>

```csharp
public string SyncRepo { get; set; }
```

- *Type:* string

The URL of the Git repository to use as the source of truth.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#sync_repo GoogleGkeHubFeatureMembership#sync_repo}

---

##### `SyncRev`<sup>Optional</sup> <a name="SyncRev" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.syncRev"></a>

```csharp
public string SyncRev { get; set; }
```

- *Type:* string

Git revision (tag or hash) to check out. Default HEAD.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#sync_rev GoogleGkeHubFeatureMembership#sync_rev}

---

##### `SyncWaitSecs`<sup>Optional</sup> <a name="SyncWaitSecs" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.syncWaitSecs"></a>

```csharp
public string SyncWaitSecs { get; set; }
```

- *Type:* string

Period in seconds between consecutive syncs. Default: 15.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#sync_wait_secs GoogleGkeHubFeatureMembership#sync_wait_secs}

---

### GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci <a name="GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci {
    string GcpServiceAccountEmail = null,
    string PolicyDir = null,
    string SecretType = null,
    string SyncRepo = null,
    string SyncWaitSecs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.gcpServiceAccountEmail">GcpServiceAccountEmail</a></code> | <code>string</code> | The GCP Service Account Email used for auth when secret_type is gcpserviceaccount. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.policyDir">PolicyDir</a></code> | <code>string</code> | The absolute path of the directory that contains the local resources. Default: the root directory of the image. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.secretType">SecretType</a></code> | <code>string</code> | Type of secret configured for access to the OCI Image. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.syncRepo">SyncRepo</a></code> | <code>string</code> | The OCI image repository URL for the package to sync from. e.g. LOCATION-docker.pkg.dev/PROJECT_ID/REPOSITORY_NAME/PACKAGE_NAME. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.syncWaitSecs">SyncWaitSecs</a></code> | <code>string</code> | Period in seconds(int64 format) between consecutive syncs. Default: 15. |

---

##### `GcpServiceAccountEmail`<sup>Optional</sup> <a name="GcpServiceAccountEmail" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.gcpServiceAccountEmail"></a>

```csharp
public string GcpServiceAccountEmail { get; set; }
```

- *Type:* string

The GCP Service Account Email used for auth when secret_type is gcpserviceaccount.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#gcp_service_account_email GoogleGkeHubFeatureMembership#gcp_service_account_email}

---

##### `PolicyDir`<sup>Optional</sup> <a name="PolicyDir" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.policyDir"></a>

```csharp
public string PolicyDir { get; set; }
```

- *Type:* string

The absolute path of the directory that contains the local resources. Default: the root directory of the image.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#policy_dir GoogleGkeHubFeatureMembership#policy_dir}

---

##### `SecretType`<sup>Optional</sup> <a name="SecretType" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.secretType"></a>

```csharp
public string SecretType { get; set; }
```

- *Type:* string

Type of secret configured for access to the OCI Image.

Must be one of gcenode, gcpserviceaccount or none. The validation of this is case-sensitive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#secret_type GoogleGkeHubFeatureMembership#secret_type}

---

##### `SyncRepo`<sup>Optional</sup> <a name="SyncRepo" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.syncRepo"></a>

```csharp
public string SyncRepo { get; set; }
```

- *Type:* string

The OCI image repository URL for the package to sync from. e.g. LOCATION-docker.pkg.dev/PROJECT_ID/REPOSITORY_NAME/PACKAGE_NAME.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#sync_repo GoogleGkeHubFeatureMembership#sync_repo}

---

##### `SyncWaitSecs`<sup>Optional</sup> <a name="SyncWaitSecs" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.syncWaitSecs"></a>

```csharp
public string SyncWaitSecs { get; set; }
```

- *Type:* string

Period in seconds(int64 format) between consecutive syncs. Default: 15.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#sync_wait_secs GoogleGkeHubFeatureMembership#sync_wait_secs}

---

### GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController <a name="GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController {
    object Enabled = null,
    object EnableHierarchicalResourceQuota = null,
    object EnablePodTreeLabels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController.property.enabled">Enabled</a></code> | <code>object</code> | Whether Hierarchy Controller is enabled in this cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController.property.enableHierarchicalResourceQuota">EnableHierarchicalResourceQuota</a></code> | <code>object</code> | Whether hierarchical resource quota is enabled in this cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController.property.enablePodTreeLabels">EnablePodTreeLabels</a></code> | <code>object</code> | Whether pod tree labels are enabled in this cluster. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether Hierarchy Controller is enabled in this cluster.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#enabled GoogleGkeHubFeatureMembership#enabled}

---

##### `EnableHierarchicalResourceQuota`<sup>Optional</sup> <a name="EnableHierarchicalResourceQuota" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController.property.enableHierarchicalResourceQuota"></a>

```csharp
public object EnableHierarchicalResourceQuota { get; set; }
```

- *Type:* object

Whether hierarchical resource quota is enabled in this cluster.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#enable_hierarchical_resource_quota GoogleGkeHubFeatureMembership#enable_hierarchical_resource_quota}

---

##### `EnablePodTreeLabels`<sup>Optional</sup> <a name="EnablePodTreeLabels" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController.property.enablePodTreeLabels"></a>

```csharp
public object EnablePodTreeLabels { get; set; }
```

- *Type:* object

Whether pod tree labels are enabled in this cluster.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#enable_pod_tree_labels GoogleGkeHubFeatureMembership#enable_pod_tree_labels}

---

### GoogleGkeHubFeatureMembershipConfigmanagementPolicyController <a name="GoogleGkeHubFeatureMembershipConfigmanagementPolicyController" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeHubFeatureMembershipConfigmanagementPolicyController {
    string AuditIntervalSeconds = null,
    object Enabled = null,
    string[] ExemptableNamespaces = null,
    object LogDeniesEnabled = null,
    GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring Monitoring = null,
    object MutationEnabled = null,
    object ReferentialRulesEnabled = null,
    object TemplateLibraryInstalled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController.property.auditIntervalSeconds">AuditIntervalSeconds</a></code> | <code>string</code> | Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController.property.enabled">Enabled</a></code> | <code>object</code> | Enables the installation of Policy Controller. If false, the rest of PolicyController fields take no effect. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController.property.exemptableNamespaces">ExemptableNamespaces</a></code> | <code>string[]</code> | The set of namespaces that are excluded from Policy Controller checks. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController.property.logDeniesEnabled">LogDeniesEnabled</a></code> | <code>object</code> | Logs all denies and dry run failures. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController.property.monitoring">Monitoring</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring">GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring</a></code> | monitoring block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController.property.mutationEnabled">MutationEnabled</a></code> | <code>object</code> | Enable or disable mutation in policy controller. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController.property.referentialRulesEnabled">ReferentialRulesEnabled</a></code> | <code>object</code> | Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController.property.templateLibraryInstalled">TemplateLibraryInstalled</a></code> | <code>object</code> | Installs the default template library along with Policy Controller. |

---

##### `AuditIntervalSeconds`<sup>Optional</sup> <a name="AuditIntervalSeconds" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController.property.auditIntervalSeconds"></a>

```csharp
public string AuditIntervalSeconds { get; set; }
```

- *Type:* string

Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#audit_interval_seconds GoogleGkeHubFeatureMembership#audit_interval_seconds}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Enables the installation of Policy Controller. If false, the rest of PolicyController fields take no effect.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#enabled GoogleGkeHubFeatureMembership#enabled}

---

##### `ExemptableNamespaces`<sup>Optional</sup> <a name="ExemptableNamespaces" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController.property.exemptableNamespaces"></a>

```csharp
public string[] ExemptableNamespaces { get; set; }
```

- *Type:* string[]

The set of namespaces that are excluded from Policy Controller checks.

Namespaces do not need to currently exist on the cluster.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#exemptable_namespaces GoogleGkeHubFeatureMembership#exemptable_namespaces}

---

##### `LogDeniesEnabled`<sup>Optional</sup> <a name="LogDeniesEnabled" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController.property.logDeniesEnabled"></a>

```csharp
public object LogDeniesEnabled { get; set; }
```

- *Type:* object

Logs all denies and dry run failures.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#log_denies_enabled GoogleGkeHubFeatureMembership#log_denies_enabled}

---

##### `Monitoring`<sup>Optional</sup> <a name="Monitoring" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController.property.monitoring"></a>

```csharp
public GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring Monitoring { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring">GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring</a>

monitoring block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#monitoring GoogleGkeHubFeatureMembership#monitoring}

---

##### `MutationEnabled`<sup>Optional</sup> <a name="MutationEnabled" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController.property.mutationEnabled"></a>

```csharp
public object MutationEnabled { get; set; }
```

- *Type:* object

Enable or disable mutation in policy controller.

If true, mutation CRDs, webhook and controller deployment will be deployed to the cluster.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#mutation_enabled GoogleGkeHubFeatureMembership#mutation_enabled}

---

##### `ReferentialRulesEnabled`<sup>Optional</sup> <a name="ReferentialRulesEnabled" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController.property.referentialRulesEnabled"></a>

```csharp
public object ReferentialRulesEnabled { get; set; }
```

- *Type:* object

Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#referential_rules_enabled GoogleGkeHubFeatureMembership#referential_rules_enabled}

---

##### `TemplateLibraryInstalled`<sup>Optional</sup> <a name="TemplateLibraryInstalled" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController.property.templateLibraryInstalled"></a>

```csharp
public object TemplateLibraryInstalled { get; set; }
```

- *Type:* object

Installs the default template library along with Policy Controller.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#template_library_installed GoogleGkeHubFeatureMembership#template_library_installed}

---

### GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring <a name="GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring {
    string[] Backends = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring.property.backends">Backends</a></code> | <code>string[]</code> | Specifies the list of backends Policy Controller will export to. Specifying an empty value `[]` disables metrics export. |

---

##### `Backends`<sup>Optional</sup> <a name="Backends" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring.property.backends"></a>

```csharp
public string[] Backends { get; set; }
```

- *Type:* string[]

Specifies the list of backends Policy Controller will export to. Specifying an empty value `[]` disables metrics export.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#backends GoogleGkeHubFeatureMembership#backends}

---

### GoogleGkeHubFeatureMembershipMesh <a name="GoogleGkeHubFeatureMembershipMesh" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMesh"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMesh.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeHubFeatureMembershipMesh {
    string ControlPlane = null,
    string Management = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMesh.property.controlPlane">ControlPlane</a></code> | <code>string</code> | **DEPRECATED** Whether to automatically manage Service Mesh control planes. Possible values: CONTROL_PLANE_MANAGEMENT_UNSPECIFIED, AUTOMATIC, MANUAL. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMesh.property.management">Management</a></code> | <code>string</code> | Whether to automatically manage Service Mesh. Possible values: MANAGEMENT_UNSPECIFIED, MANAGEMENT_AUTOMATIC, MANAGEMENT_MANUAL. |

---

##### `ControlPlane`<sup>Optional</sup> <a name="ControlPlane" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMesh.property.controlPlane"></a>

```csharp
public string ControlPlane { get; set; }
```

- *Type:* string

**DEPRECATED** Whether to automatically manage Service Mesh control planes. Possible values: CONTROL_PLANE_MANAGEMENT_UNSPECIFIED, AUTOMATIC, MANUAL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#control_plane GoogleGkeHubFeatureMembership#control_plane}

---

##### `Management`<sup>Optional</sup> <a name="Management" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMesh.property.management"></a>

```csharp
public string Management { get; set; }
```

- *Type:* string

Whether to automatically manage Service Mesh. Possible values: MANAGEMENT_UNSPECIFIED, MANAGEMENT_AUTOMATIC, MANAGEMENT_MANUAL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#management GoogleGkeHubFeatureMembership#management}

---

### GoogleGkeHubFeatureMembershipTimeouts <a name="GoogleGkeHubFeatureMembershipTimeouts" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeHubFeatureMembershipTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#create GoogleGkeHubFeatureMembership#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#delete GoogleGkeHubFeatureMembership#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#update GoogleGkeHubFeatureMembership#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#create GoogleGkeHubFeatureMembership#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#delete GoogleGkeHubFeatureMembership#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_gke_hub_feature_membership#update GoogleGkeHubFeatureMembership#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference <a name="GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthz">GoogleGkeHubFeatureMembershipConfigmanagementBinauthz</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeHubFeatureMembershipConfigmanagementBinauthz InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthz">GoogleGkeHubFeatureMembershipConfigmanagementBinauthz</a>

---


### GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference <a name="GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetGcpServiceAccountEmail">ResetGcpServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetHttpsProxy">ResetHttpsProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetPolicyDir">ResetPolicyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSecretType">ResetSecretType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSyncBranch">ResetSyncBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSyncRepo">ResetSyncRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSyncRev">ResetSyncRev</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSyncWaitSecs">ResetSyncWaitSecs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGcpServiceAccountEmail` <a name="ResetGcpServiceAccountEmail" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetGcpServiceAccountEmail"></a>

```csharp
private void ResetGcpServiceAccountEmail()
```

##### `ResetHttpsProxy` <a name="ResetHttpsProxy" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetHttpsProxy"></a>

```csharp
private void ResetHttpsProxy()
```

##### `ResetPolicyDir` <a name="ResetPolicyDir" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetPolicyDir"></a>

```csharp
private void ResetPolicyDir()
```

##### `ResetSecretType` <a name="ResetSecretType" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSecretType"></a>

```csharp
private void ResetSecretType()
```

##### `ResetSyncBranch` <a name="ResetSyncBranch" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSyncBranch"></a>

```csharp
private void ResetSyncBranch()
```

##### `ResetSyncRepo` <a name="ResetSyncRepo" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSyncRepo"></a>

```csharp
private void ResetSyncRepo()
```

##### `ResetSyncRev` <a name="ResetSyncRev" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSyncRev"></a>

```csharp
private void ResetSyncRev()
```

##### `ResetSyncWaitSecs` <a name="ResetSyncWaitSecs" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSyncWaitSecs"></a>

```csharp
private void ResetSyncWaitSecs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.gcpServiceAccountEmailInput">GcpServiceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.httpsProxyInput">HttpsProxyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.policyDirInput">PolicyDirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.secretTypeInput">SecretTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncBranchInput">SyncBranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncRepoInput">SyncRepoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncRevInput">SyncRevInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncWaitSecsInput">SyncWaitSecsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.gcpServiceAccountEmail">GcpServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.httpsProxy">HttpsProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.policyDir">PolicyDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.secretType">SecretType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncBranch">SyncBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncRepo">SyncRepo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncRev">SyncRev</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncWaitSecs">SyncWaitSecs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit">GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GcpServiceAccountEmailInput`<sup>Optional</sup> <a name="GcpServiceAccountEmailInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.gcpServiceAccountEmailInput"></a>

```csharp
public string GcpServiceAccountEmailInput { get; }
```

- *Type:* string

---

##### `HttpsProxyInput`<sup>Optional</sup> <a name="HttpsProxyInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.httpsProxyInput"></a>

```csharp
public string HttpsProxyInput { get; }
```

- *Type:* string

---

##### `PolicyDirInput`<sup>Optional</sup> <a name="PolicyDirInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.policyDirInput"></a>

```csharp
public string PolicyDirInput { get; }
```

- *Type:* string

---

##### `SecretTypeInput`<sup>Optional</sup> <a name="SecretTypeInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.secretTypeInput"></a>

```csharp
public string SecretTypeInput { get; }
```

- *Type:* string

---

##### `SyncBranchInput`<sup>Optional</sup> <a name="SyncBranchInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncBranchInput"></a>

```csharp
public string SyncBranchInput { get; }
```

- *Type:* string

---

##### `SyncRepoInput`<sup>Optional</sup> <a name="SyncRepoInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncRepoInput"></a>

```csharp
public string SyncRepoInput { get; }
```

- *Type:* string

---

##### `SyncRevInput`<sup>Optional</sup> <a name="SyncRevInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncRevInput"></a>

```csharp
public string SyncRevInput { get; }
```

- *Type:* string

---

##### `SyncWaitSecsInput`<sup>Optional</sup> <a name="SyncWaitSecsInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncWaitSecsInput"></a>

```csharp
public string SyncWaitSecsInput { get; }
```

- *Type:* string

---

##### `GcpServiceAccountEmail`<sup>Required</sup> <a name="GcpServiceAccountEmail" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.gcpServiceAccountEmail"></a>

```csharp
public string GcpServiceAccountEmail { get; }
```

- *Type:* string

---

##### `HttpsProxy`<sup>Required</sup> <a name="HttpsProxy" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.httpsProxy"></a>

```csharp
public string HttpsProxy { get; }
```

- *Type:* string

---

##### `PolicyDir`<sup>Required</sup> <a name="PolicyDir" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.policyDir"></a>

```csharp
public string PolicyDir { get; }
```

- *Type:* string

---

##### `SecretType`<sup>Required</sup> <a name="SecretType" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.secretType"></a>

```csharp
public string SecretType { get; }
```

- *Type:* string

---

##### `SyncBranch`<sup>Required</sup> <a name="SyncBranch" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncBranch"></a>

```csharp
public string SyncBranch { get; }
```

- *Type:* string

---

##### `SyncRepo`<sup>Required</sup> <a name="SyncRepo" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncRepo"></a>

```csharp
public string SyncRepo { get; }
```

- *Type:* string

---

##### `SyncRev`<sup>Required</sup> <a name="SyncRev" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncRev"></a>

```csharp
public string SyncRev { get; }
```

- *Type:* string

---

##### `SyncWaitSecs`<sup>Required</sup> <a name="SyncWaitSecs" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncWaitSecs"></a>

```csharp
public string SyncWaitSecs { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit">GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit</a>

---


### GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference <a name="GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetGcpServiceAccountEmail">ResetGcpServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetPolicyDir">ResetPolicyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetSecretType">ResetSecretType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetSyncRepo">ResetSyncRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetSyncWaitSecs">ResetSyncWaitSecs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGcpServiceAccountEmail` <a name="ResetGcpServiceAccountEmail" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetGcpServiceAccountEmail"></a>

```csharp
private void ResetGcpServiceAccountEmail()
```

##### `ResetPolicyDir` <a name="ResetPolicyDir" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetPolicyDir"></a>

```csharp
private void ResetPolicyDir()
```

##### `ResetSecretType` <a name="ResetSecretType" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetSecretType"></a>

```csharp
private void ResetSecretType()
```

##### `ResetSyncRepo` <a name="ResetSyncRepo" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetSyncRepo"></a>

```csharp
private void ResetSyncRepo()
```

##### `ResetSyncWaitSecs` <a name="ResetSyncWaitSecs" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetSyncWaitSecs"></a>

```csharp
private void ResetSyncWaitSecs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.gcpServiceAccountEmailInput">GcpServiceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.policyDirInput">PolicyDirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.secretTypeInput">SecretTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.syncRepoInput">SyncRepoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.syncWaitSecsInput">SyncWaitSecsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.gcpServiceAccountEmail">GcpServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.policyDir">PolicyDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.secretType">SecretType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.syncRepo">SyncRepo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.syncWaitSecs">SyncWaitSecs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci">GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GcpServiceAccountEmailInput`<sup>Optional</sup> <a name="GcpServiceAccountEmailInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.gcpServiceAccountEmailInput"></a>

```csharp
public string GcpServiceAccountEmailInput { get; }
```

- *Type:* string

---

##### `PolicyDirInput`<sup>Optional</sup> <a name="PolicyDirInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.policyDirInput"></a>

```csharp
public string PolicyDirInput { get; }
```

- *Type:* string

---

##### `SecretTypeInput`<sup>Optional</sup> <a name="SecretTypeInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.secretTypeInput"></a>

```csharp
public string SecretTypeInput { get; }
```

- *Type:* string

---

##### `SyncRepoInput`<sup>Optional</sup> <a name="SyncRepoInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.syncRepoInput"></a>

```csharp
public string SyncRepoInput { get; }
```

- *Type:* string

---

##### `SyncWaitSecsInput`<sup>Optional</sup> <a name="SyncWaitSecsInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.syncWaitSecsInput"></a>

```csharp
public string SyncWaitSecsInput { get; }
```

- *Type:* string

---

##### `GcpServiceAccountEmail`<sup>Required</sup> <a name="GcpServiceAccountEmail" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.gcpServiceAccountEmail"></a>

```csharp
public string GcpServiceAccountEmail { get; }
```

- *Type:* string

---

##### `PolicyDir`<sup>Required</sup> <a name="PolicyDir" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.policyDir"></a>

```csharp
public string PolicyDir { get; }
```

- *Type:* string

---

##### `SecretType`<sup>Required</sup> <a name="SecretType" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.secretType"></a>

```csharp
public string SecretType { get; }
```

- *Type:* string

---

##### `SyncRepo`<sup>Required</sup> <a name="SyncRepo" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.syncRepo"></a>

```csharp
public string SyncRepo { get; }
```

- *Type:* string

---

##### `SyncWaitSecs`<sup>Required</sup> <a name="SyncWaitSecs" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.syncWaitSecs"></a>

```csharp
public string SyncWaitSecs { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci">GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci</a>

---


### GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference <a name="GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.putGit">PutGit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.putOci">PutOci</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetGit">ResetGit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetOci">ResetOci</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetPreventDrift">ResetPreventDrift</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetSourceFormat">ResetSourceFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGit` <a name="PutGit" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.putGit"></a>

```csharp
private void PutGit(GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.putGit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit">GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit</a>

---

##### `PutOci` <a name="PutOci" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.putOci"></a>

```csharp
private void PutOci(GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.putOci.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci">GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci</a>

---

##### `ResetGit` <a name="ResetGit" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetGit"></a>

```csharp
private void ResetGit()
```

##### `ResetOci` <a name="ResetOci" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetOci"></a>

```csharp
private void ResetOci()
```

##### `ResetPreventDrift` <a name="ResetPreventDrift" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetPreventDrift"></a>

```csharp
private void ResetPreventDrift()
```

##### `ResetSourceFormat` <a name="ResetSourceFormat" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetSourceFormat"></a>

```csharp
private void ResetSourceFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.git">Git</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference">GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.oci">Oci</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference">GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.gitInput">GitInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit">GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.ociInput">OciInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci">GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.preventDriftInput">PreventDriftInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.sourceFormatInput">SourceFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.preventDrift">PreventDrift</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.sourceFormat">SourceFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSync">GoogleGkeHubFeatureMembershipConfigmanagementConfigSync</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Git`<sup>Required</sup> <a name="Git" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.git"></a>

```csharp
public GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference Git { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference">GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference</a>

---

##### `Oci`<sup>Required</sup> <a name="Oci" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.oci"></a>

```csharp
public GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference Oci { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference">GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference</a>

---

##### `GitInput`<sup>Optional</sup> <a name="GitInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.gitInput"></a>

```csharp
public GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit GitInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit">GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncGit</a>

---

##### `OciInput`<sup>Optional</sup> <a name="OciInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.ociInput"></a>

```csharp
public GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci OciInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci">GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOci</a>

---

##### `PreventDriftInput`<sup>Optional</sup> <a name="PreventDriftInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.preventDriftInput"></a>

```csharp
public object PreventDriftInput { get; }
```

- *Type:* object

---

##### `SourceFormatInput`<sup>Optional</sup> <a name="SourceFormatInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.sourceFormatInput"></a>

```csharp
public string SourceFormatInput { get; }
```

- *Type:* string

---

##### `PreventDrift`<sup>Required</sup> <a name="PreventDrift" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.preventDrift"></a>

```csharp
public object PreventDrift { get; }
```

- *Type:* object

---

##### `SourceFormat`<sup>Required</sup> <a name="SourceFormat" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.sourceFormat"></a>

```csharp
public string SourceFormat { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeHubFeatureMembershipConfigmanagementConfigSync InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSync">GoogleGkeHubFeatureMembershipConfigmanagementConfigSync</a>

---


### GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference <a name="GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resetEnableHierarchicalResourceQuota">ResetEnableHierarchicalResourceQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resetEnablePodTreeLabels">ResetEnablePodTreeLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetEnableHierarchicalResourceQuota` <a name="ResetEnableHierarchicalResourceQuota" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resetEnableHierarchicalResourceQuota"></a>

```csharp
private void ResetEnableHierarchicalResourceQuota()
```

##### `ResetEnablePodTreeLabels` <a name="ResetEnablePodTreeLabels" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resetEnablePodTreeLabels"></a>

```csharp
private void ResetEnablePodTreeLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enableHierarchicalResourceQuotaInput">EnableHierarchicalResourceQuotaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enablePodTreeLabelsInput">EnablePodTreeLabelsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enableHierarchicalResourceQuota">EnableHierarchicalResourceQuota</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enablePodTreeLabels">EnablePodTreeLabels</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController">GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `EnableHierarchicalResourceQuotaInput`<sup>Optional</sup> <a name="EnableHierarchicalResourceQuotaInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enableHierarchicalResourceQuotaInput"></a>

```csharp
public object EnableHierarchicalResourceQuotaInput { get; }
```

- *Type:* object

---

##### `EnablePodTreeLabelsInput`<sup>Optional</sup> <a name="EnablePodTreeLabelsInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enablePodTreeLabelsInput"></a>

```csharp
public object EnablePodTreeLabelsInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `EnableHierarchicalResourceQuota`<sup>Required</sup> <a name="EnableHierarchicalResourceQuota" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enableHierarchicalResourceQuota"></a>

```csharp
public object EnableHierarchicalResourceQuota { get; }
```

- *Type:* object

---

##### `EnablePodTreeLabels`<sup>Required</sup> <a name="EnablePodTreeLabels" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enablePodTreeLabels"></a>

```csharp
public object EnablePodTreeLabels { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController">GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController</a>

---


### GoogleGkeHubFeatureMembershipConfigmanagementOutputReference <a name="GoogleGkeHubFeatureMembershipConfigmanagementOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeHubFeatureMembershipConfigmanagementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.putBinauthz">PutBinauthz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.putConfigSync">PutConfigSync</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.putHierarchyController">PutHierarchyController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.putPolicyController">PutPolicyController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.resetBinauthz">ResetBinauthz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.resetConfigSync">ResetConfigSync</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.resetHierarchyController">ResetHierarchyController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.resetPolicyController">ResetPolicyController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBinauthz` <a name="PutBinauthz" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.putBinauthz"></a>

```csharp
private void PutBinauthz(GoogleGkeHubFeatureMembershipConfigmanagementBinauthz Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.putBinauthz.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthz">GoogleGkeHubFeatureMembershipConfigmanagementBinauthz</a>

---

##### `PutConfigSync` <a name="PutConfigSync" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.putConfigSync"></a>

```csharp
private void PutConfigSync(GoogleGkeHubFeatureMembershipConfigmanagementConfigSync Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.putConfigSync.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSync">GoogleGkeHubFeatureMembershipConfigmanagementConfigSync</a>

---

##### `PutHierarchyController` <a name="PutHierarchyController" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.putHierarchyController"></a>

```csharp
private void PutHierarchyController(GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.putHierarchyController.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController">GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController</a>

---

##### `PutPolicyController` <a name="PutPolicyController" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.putPolicyController"></a>

```csharp
private void PutPolicyController(GoogleGkeHubFeatureMembershipConfigmanagementPolicyController Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.putPolicyController.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController">GoogleGkeHubFeatureMembershipConfigmanagementPolicyController</a>

---

##### `ResetBinauthz` <a name="ResetBinauthz" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.resetBinauthz"></a>

```csharp
private void ResetBinauthz()
```

##### `ResetConfigSync` <a name="ResetConfigSync" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.resetConfigSync"></a>

```csharp
private void ResetConfigSync()
```

##### `ResetHierarchyController` <a name="ResetHierarchyController" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.resetHierarchyController"></a>

```csharp
private void ResetHierarchyController()
```

##### `ResetPolicyController` <a name="ResetPolicyController" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.resetPolicyController"></a>

```csharp
private void ResetPolicyController()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.binauthz">Binauthz</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference">GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.configSync">ConfigSync</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference">GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.hierarchyController">HierarchyController</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference">GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.policyController">PolicyController</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference">GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.binauthzInput">BinauthzInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthz">GoogleGkeHubFeatureMembershipConfigmanagementBinauthz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.configSyncInput">ConfigSyncInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSync">GoogleGkeHubFeatureMembershipConfigmanagementConfigSync</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.hierarchyControllerInput">HierarchyControllerInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController">GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.policyControllerInput">PolicyControllerInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController">GoogleGkeHubFeatureMembershipConfigmanagementPolicyController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagement">GoogleGkeHubFeatureMembershipConfigmanagement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Binauthz`<sup>Required</sup> <a name="Binauthz" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.binauthz"></a>

```csharp
public GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference Binauthz { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference">GoogleGkeHubFeatureMembershipConfigmanagementBinauthzOutputReference</a>

---

##### `ConfigSync`<sup>Required</sup> <a name="ConfigSync" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.configSync"></a>

```csharp
public GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference ConfigSync { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference">GoogleGkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference</a>

---

##### `HierarchyController`<sup>Required</sup> <a name="HierarchyController" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.hierarchyController"></a>

```csharp
public GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference HierarchyController { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference">GoogleGkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference</a>

---

##### `PolicyController`<sup>Required</sup> <a name="PolicyController" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.policyController"></a>

```csharp
public GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference PolicyController { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference">GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference</a>

---

##### `BinauthzInput`<sup>Optional</sup> <a name="BinauthzInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.binauthzInput"></a>

```csharp
public GoogleGkeHubFeatureMembershipConfigmanagementBinauthz BinauthzInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementBinauthz">GoogleGkeHubFeatureMembershipConfigmanagementBinauthz</a>

---

##### `ConfigSyncInput`<sup>Optional</sup> <a name="ConfigSyncInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.configSyncInput"></a>

```csharp
public GoogleGkeHubFeatureMembershipConfigmanagementConfigSync ConfigSyncInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementConfigSync">GoogleGkeHubFeatureMembershipConfigmanagementConfigSync</a>

---

##### `HierarchyControllerInput`<sup>Optional</sup> <a name="HierarchyControllerInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.hierarchyControllerInput"></a>

```csharp
public GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController HierarchyControllerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController">GoogleGkeHubFeatureMembershipConfigmanagementHierarchyController</a>

---

##### `PolicyControllerInput`<sup>Optional</sup> <a name="PolicyControllerInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.policyControllerInput"></a>

```csharp
public GoogleGkeHubFeatureMembershipConfigmanagementPolicyController PolicyControllerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController">GoogleGkeHubFeatureMembershipConfigmanagementPolicyController</a>

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeHubFeatureMembershipConfigmanagement InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagement">GoogleGkeHubFeatureMembershipConfigmanagement</a>

---


### GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference <a name="GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.resetBackends">ResetBackends</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackends` <a name="ResetBackends" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.resetBackends"></a>

```csharp
private void ResetBackends()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.backendsInput">BackendsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.backends">Backends</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring">GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackendsInput`<sup>Optional</sup> <a name="BackendsInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.backendsInput"></a>

```csharp
public string[] BackendsInput { get; }
```

- *Type:* string[]

---

##### `Backends`<sup>Required</sup> <a name="Backends" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.backends"></a>

```csharp
public string[] Backends { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring">GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring</a>

---


### GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference <a name="GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.putMonitoring">PutMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetAuditIntervalSeconds">ResetAuditIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetExemptableNamespaces">ResetExemptableNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetLogDeniesEnabled">ResetLogDeniesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetMonitoring">ResetMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetMutationEnabled">ResetMutationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetReferentialRulesEnabled">ResetReferentialRulesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetTemplateLibraryInstalled">ResetTemplateLibraryInstalled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMonitoring` <a name="PutMonitoring" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.putMonitoring"></a>

```csharp
private void PutMonitoring(GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.putMonitoring.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring">GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring</a>

---

##### `ResetAuditIntervalSeconds` <a name="ResetAuditIntervalSeconds" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetAuditIntervalSeconds"></a>

```csharp
private void ResetAuditIntervalSeconds()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetExemptableNamespaces` <a name="ResetExemptableNamespaces" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetExemptableNamespaces"></a>

```csharp
private void ResetExemptableNamespaces()
```

##### `ResetLogDeniesEnabled` <a name="ResetLogDeniesEnabled" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetLogDeniesEnabled"></a>

```csharp
private void ResetLogDeniesEnabled()
```

##### `ResetMonitoring` <a name="ResetMonitoring" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetMonitoring"></a>

```csharp
private void ResetMonitoring()
```

##### `ResetMutationEnabled` <a name="ResetMutationEnabled" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetMutationEnabled"></a>

```csharp
private void ResetMutationEnabled()
```

##### `ResetReferentialRulesEnabled` <a name="ResetReferentialRulesEnabled" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetReferentialRulesEnabled"></a>

```csharp
private void ResetReferentialRulesEnabled()
```

##### `ResetTemplateLibraryInstalled` <a name="ResetTemplateLibraryInstalled" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetTemplateLibraryInstalled"></a>

```csharp
private void ResetTemplateLibraryInstalled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.monitoring">Monitoring</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference">GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.auditIntervalSecondsInput">AuditIntervalSecondsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.exemptableNamespacesInput">ExemptableNamespacesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.logDeniesEnabledInput">LogDeniesEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.monitoringInput">MonitoringInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring">GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.mutationEnabledInput">MutationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.referentialRulesEnabledInput">ReferentialRulesEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.templateLibraryInstalledInput">TemplateLibraryInstalledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.auditIntervalSeconds">AuditIntervalSeconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.exemptableNamespaces">ExemptableNamespaces</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.logDeniesEnabled">LogDeniesEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.mutationEnabled">MutationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.referentialRulesEnabled">ReferentialRulesEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.templateLibraryInstalled">TemplateLibraryInstalled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController">GoogleGkeHubFeatureMembershipConfigmanagementPolicyController</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Monitoring`<sup>Required</sup> <a name="Monitoring" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.monitoring"></a>

```csharp
public GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference Monitoring { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference">GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference</a>

---

##### `AuditIntervalSecondsInput`<sup>Optional</sup> <a name="AuditIntervalSecondsInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.auditIntervalSecondsInput"></a>

```csharp
public string AuditIntervalSecondsInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `ExemptableNamespacesInput`<sup>Optional</sup> <a name="ExemptableNamespacesInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.exemptableNamespacesInput"></a>

```csharp
public string[] ExemptableNamespacesInput { get; }
```

- *Type:* string[]

---

##### `LogDeniesEnabledInput`<sup>Optional</sup> <a name="LogDeniesEnabledInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.logDeniesEnabledInput"></a>

```csharp
public object LogDeniesEnabledInput { get; }
```

- *Type:* object

---

##### `MonitoringInput`<sup>Optional</sup> <a name="MonitoringInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.monitoringInput"></a>

```csharp
public GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring MonitoringInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring">GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring</a>

---

##### `MutationEnabledInput`<sup>Optional</sup> <a name="MutationEnabledInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.mutationEnabledInput"></a>

```csharp
public object MutationEnabledInput { get; }
```

- *Type:* object

---

##### `ReferentialRulesEnabledInput`<sup>Optional</sup> <a name="ReferentialRulesEnabledInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.referentialRulesEnabledInput"></a>

```csharp
public object ReferentialRulesEnabledInput { get; }
```

- *Type:* object

---

##### `TemplateLibraryInstalledInput`<sup>Optional</sup> <a name="TemplateLibraryInstalledInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.templateLibraryInstalledInput"></a>

```csharp
public object TemplateLibraryInstalledInput { get; }
```

- *Type:* object

---

##### `AuditIntervalSeconds`<sup>Required</sup> <a name="AuditIntervalSeconds" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.auditIntervalSeconds"></a>

```csharp
public string AuditIntervalSeconds { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `ExemptableNamespaces`<sup>Required</sup> <a name="ExemptableNamespaces" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.exemptableNamespaces"></a>

```csharp
public string[] ExemptableNamespaces { get; }
```

- *Type:* string[]

---

##### `LogDeniesEnabled`<sup>Required</sup> <a name="LogDeniesEnabled" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.logDeniesEnabled"></a>

```csharp
public object LogDeniesEnabled { get; }
```

- *Type:* object

---

##### `MutationEnabled`<sup>Required</sup> <a name="MutationEnabled" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.mutationEnabled"></a>

```csharp
public object MutationEnabled { get; }
```

- *Type:* object

---

##### `ReferentialRulesEnabled`<sup>Required</sup> <a name="ReferentialRulesEnabled" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.referentialRulesEnabled"></a>

```csharp
public object ReferentialRulesEnabled { get; }
```

- *Type:* object

---

##### `TemplateLibraryInstalled`<sup>Required</sup> <a name="TemplateLibraryInstalled" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.templateLibraryInstalled"></a>

```csharp
public object TemplateLibraryInstalled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeHubFeatureMembershipConfigmanagementPolicyController InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipConfigmanagementPolicyController">GoogleGkeHubFeatureMembershipConfigmanagementPolicyController</a>

---


### GoogleGkeHubFeatureMembershipMeshOutputReference <a name="GoogleGkeHubFeatureMembershipMeshOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeHubFeatureMembershipMeshOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.resetControlPlane">ResetControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.resetManagement">ResetManagement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetControlPlane` <a name="ResetControlPlane" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.resetControlPlane"></a>

```csharp
private void ResetControlPlane()
```

##### `ResetManagement` <a name="ResetManagement" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.resetManagement"></a>

```csharp
private void ResetManagement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.property.controlPlaneInput">ControlPlaneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.property.managementInput">ManagementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.property.controlPlane">ControlPlane</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.property.management">Management</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMesh">GoogleGkeHubFeatureMembershipMesh</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ControlPlaneInput`<sup>Optional</sup> <a name="ControlPlaneInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.property.controlPlaneInput"></a>

```csharp
public string ControlPlaneInput { get; }
```

- *Type:* string

---

##### `ManagementInput`<sup>Optional</sup> <a name="ManagementInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.property.managementInput"></a>

```csharp
public string ManagementInput { get; }
```

- *Type:* string

---

##### `ControlPlane`<sup>Required</sup> <a name="ControlPlane" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.property.controlPlane"></a>

```csharp
public string ControlPlane { get; }
```

- *Type:* string

---

##### `Management`<sup>Required</sup> <a name="Management" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.property.management"></a>

```csharp
public string Management { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMeshOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeHubFeatureMembershipMesh InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipMesh">GoogleGkeHubFeatureMembershipMesh</a>

---


### GoogleGkeHubFeatureMembershipTimeoutsOutputReference <a name="GoogleGkeHubFeatureMembershipTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeHubFeatureMembershipTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeHubFeatureMembership.GoogleGkeHubFeatureMembershipTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



