# `google_access_context_manager_service_perimeter_egress_policy`

Refer to the Terraform Registory for docs: [`google_access_context_manager_service_perimeter_egress_policy`](https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy).

# `googleAccessContextManagerServicePerimeterEgressPolicy` Submodule <a name="`googleAccessContextManagerServicePerimeterEgressPolicy` Submodule" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAccessContextManagerServicePerimeterEgressPolicy <a name="GoogleAccessContextManagerServicePerimeterEgressPolicy" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy google_access_context_manager_service_perimeter_egress_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerServicePerimeterEgressPolicy(Construct Scope, string Id, GoogleAccessContextManagerServicePerimeterEgressPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig">GoogleAccessContextManagerServicePerimeterEgressPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig">GoogleAccessContextManagerServicePerimeterEgressPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.putEgressFrom">PutEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.putEgressTo">PutEgressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.resetEgressFrom">ResetEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.resetEgressTo">ResetEgressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutEgressFrom` <a name="PutEgressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.putEgressFrom"></a>

```csharp
private void PutEgressFrom(GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.putEgressFrom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom</a>

---

##### `PutEgressTo` <a name="PutEgressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.putEgressTo"></a>

```csharp
private void PutEgressTo(GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.putEgressTo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts</a>

---

##### `ResetEgressFrom` <a name="ResetEgressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.resetEgressFrom"></a>

```csharp
private void ResetEgressFrom()
```

##### `ResetEgressTo` <a name="ResetEgressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.resetEgressTo"></a>

```csharp
private void ResetEgressTo()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleAccessContextManagerServicePerimeterEgressPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleAccessContextManagerServicePerimeterEgressPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleAccessContextManagerServicePerimeterEgressPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.egressFrom">EgressFrom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.egressTo">EgressTo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference">GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.egressFromInput">EgressFromInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.egressToInput">EgressToInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.perimeterInput">PerimeterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.perimeter">Perimeter</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `EgressFrom`<sup>Required</sup> <a name="EgressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.egressFrom"></a>

```csharp
public GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference EgressFrom { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference</a>

---

##### `EgressTo`<sup>Required</sup> <a name="EgressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.egressTo"></a>

```csharp
public GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference EgressTo { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.timeouts"></a>

```csharp
public GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference">GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference</a>

---

##### `EgressFromInput`<sup>Optional</sup> <a name="EgressFromInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.egressFromInput"></a>

```csharp
public GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom EgressFromInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom</a>

---

##### `EgressToInput`<sup>Optional</sup> <a name="EgressToInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.egressToInput"></a>

```csharp
public GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo EgressToInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PerimeterInput`<sup>Optional</sup> <a name="PerimeterInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.perimeterInput"></a>

```csharp
public string PerimeterInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Perimeter`<sup>Required</sup> <a name="Perimeter" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.perimeter"></a>

```csharp
public string Perimeter { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAccessContextManagerServicePerimeterEgressPolicyConfig <a name="GoogleAccessContextManagerServicePerimeterEgressPolicyConfig" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerServicePerimeterEgressPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Perimeter,
    GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom EgressFrom = null,
    GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo EgressTo = null,
    string Id = null,
    GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.perimeter">Perimeter</a></code> | <code>string</code> | The name of the Service Perimeter to add this resource to. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.egressFrom">EgressFrom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom</a></code> | egress_from block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.egressTo">EgressTo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo</a></code> | egress_to block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy#id GoogleAccessContextManagerServicePerimeterEgressPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Perimeter`<sup>Required</sup> <a name="Perimeter" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.perimeter"></a>

```csharp
public string Perimeter { get; set; }
```

- *Type:* string

The name of the Service Perimeter to add this resource to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy#perimeter GoogleAccessContextManagerServicePerimeterEgressPolicy#perimeter}

---

##### `EgressFrom`<sup>Optional</sup> <a name="EgressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.egressFrom"></a>

```csharp
public GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom EgressFrom { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom</a>

egress_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy#egress_from GoogleAccessContextManagerServicePerimeterEgressPolicy#egress_from}

---

##### `EgressTo`<sup>Optional</sup> <a name="EgressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.egressTo"></a>

```csharp
public GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo EgressTo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo</a>

egress_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy#egress_to GoogleAccessContextManagerServicePerimeterEgressPolicy#egress_to}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy#id GoogleAccessContextManagerServicePerimeterEgressPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyConfig.property.timeouts"></a>

```csharp
public GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy#timeouts GoogleAccessContextManagerServicePerimeterEgressPolicy#timeouts}

---

### GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom <a name="GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom {
    string[] Identities = null,
    string IdentityType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom.property.identities">Identities</a></code> | <code>string[]</code> | A list of identities that are allowed access through this 'EgressPolicy'. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom.property.identityType">IdentityType</a></code> | <code>string</code> | Specifies the type of identities that are allowed access to outside the perimeter. |

---

##### `Identities`<sup>Optional</sup> <a name="Identities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom.property.identities"></a>

```csharp
public string[] Identities { get; set; }
```

- *Type:* string[]

A list of identities that are allowed access through this 'EgressPolicy'.

Should be in the format of email address. The email address should
represent individual user or service account only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy#identities GoogleAccessContextManagerServicePerimeterEgressPolicy#identities}

---

##### `IdentityType`<sup>Optional</sup> <a name="IdentityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom.property.identityType"></a>

```csharp
public string IdentityType { get; set; }
```

- *Type:* string

Specifies the type of identities that are allowed access to outside the perimeter.

If left unspecified, then members of 'identities' field will
be allowed access. Possible values: ["ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy#identity_type GoogleAccessContextManagerServicePerimeterEgressPolicy#identity_type}

---

### GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo <a name="GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo {
    string[] ExternalResources = null,
    object Operations = null,
    string[] Resources = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo.property.externalResources">ExternalResources</a></code> | <code>string[]</code> | A list of external resources that are allowed to be accessed. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo.property.operations">Operations</a></code> | <code>object</code> | operations block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo.property.resources">Resources</a></code> | <code>string[]</code> | A list of resources, currently only projects in the form 'projects/<projectnumber>', that match this to stanza. |

---

##### `ExternalResources`<sup>Optional</sup> <a name="ExternalResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo.property.externalResources"></a>

```csharp
public string[] ExternalResources { get; set; }
```

- *Type:* string[]

A list of external resources that are allowed to be accessed.

A request
matches if it contains an external resource in this list (Example:
s3://bucket/path). Currently '*' is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy#external_resources GoogleAccessContextManagerServicePerimeterEgressPolicy#external_resources}

---

##### `Operations`<sup>Optional</sup> <a name="Operations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo.property.operations"></a>

```csharp
public object Operations { get; set; }
```

- *Type:* object

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy#operations GoogleAccessContextManagerServicePerimeterEgressPolicy#operations}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo.property.resources"></a>

```csharp
public string[] Resources { get; set; }
```

- *Type:* string[]

A list of resources, currently only projects in the form 'projects/<projectnumber>', that match this to stanza.

A request matches
if it contains a resource in this list. If * is specified for resources,
then this 'EgressTo' rule will authorize access to all resources outside
the perimeter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy#resources GoogleAccessContextManagerServicePerimeterEgressPolicy#resources}

---

### GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperations <a name="GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperations {
    object MethodSelectors = null,
    string ServiceName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperations.property.methodSelectors">MethodSelectors</a></code> | <code>object</code> | method_selectors block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperations.property.serviceName">ServiceName</a></code> | <code>string</code> | The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow. |

---

##### `MethodSelectors`<sup>Optional</sup> <a name="MethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperations.property.methodSelectors"></a>

```csharp
public object MethodSelectors { get; set; }
```

- *Type:* object

method_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy#method_selectors GoogleAccessContextManagerServicePerimeterEgressPolicy#method_selectors}

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperations.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow.

A single 'ApiOperation' with serviceName
field set to '*' will allow all methods AND permissions for all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy#service_name GoogleAccessContextManagerServicePerimeterEgressPolicy#service_name}

---

### GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors <a name="GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors {
    string Method = null,
    string Permission = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors.property.method">Method</a></code> | <code>string</code> | Value for 'method' should be a valid method name for the corresponding 'serviceName' in 'ApiOperation'. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors.property.permission">Permission</a></code> | <code>string</code> | Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'. |

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors.property.method"></a>

```csharp
public string Method { get; set; }
```

- *Type:* string

Value for 'method' should be a valid method name for the corresponding 'serviceName' in 'ApiOperation'.

If '*' used as value for method,
then ALL methods and permissions are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy#method GoogleAccessContextManagerServicePerimeterEgressPolicy#method}

---

##### `Permission`<sup>Optional</sup> <a name="Permission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy#permission GoogleAccessContextManagerServicePerimeterEgressPolicy#permission}

---

### GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts <a name="GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy#create GoogleAccessContextManagerServicePerimeterEgressPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy#delete GoogleAccessContextManagerServicePerimeterEgressPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy#update GoogleAccessContextManagerServicePerimeterEgressPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy#create GoogleAccessContextManagerServicePerimeterEgressPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy#delete GoogleAccessContextManagerServicePerimeterEgressPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_access_context_manager_service_perimeter_egress_policy#update GoogleAccessContextManagerServicePerimeterEgressPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference <a name="GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.resetIdentities">ResetIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.resetIdentityType">ResetIdentityType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentities` <a name="ResetIdentities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.resetIdentities"></a>

```csharp
private void ResetIdentities()
```

##### `ResetIdentityType` <a name="ResetIdentityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.resetIdentityType"></a>

```csharp
private void ResetIdentityType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.identitiesInput">IdentitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.identityTypeInput">IdentityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.identities">Identities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.identityType">IdentityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentitiesInput`<sup>Optional</sup> <a name="IdentitiesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.identitiesInput"></a>

```csharp
public string[] IdentitiesInput { get; }
```

- *Type:* string[]

---

##### `IdentityTypeInput`<sup>Optional</sup> <a name="IdentityTypeInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.identityTypeInput"></a>

```csharp
public string IdentityTypeInput { get; }
```

- *Type:* string

---

##### `Identities`<sup>Required</sup> <a name="Identities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.identities"></a>

```csharp
public string[] Identities { get; }
```

- *Type:* string[]

---

##### `IdentityType`<sup>Required</sup> <a name="IdentityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.identityType"></a>

```csharp
public string IdentityType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.internalValue"></a>

```csharp
public GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressFrom</a>

---


### GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList <a name="GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.get"></a>

```csharp
private GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList <a name="GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.get"></a>

```csharp
private GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference <a name="GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resetPermission">ResetPermission</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resetMethod"></a>

```csharp
private void ResetMethod()
```

##### `ResetPermission` <a name="ResetPermission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resetPermission"></a>

```csharp
private void ResetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.methodInput">MethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.methodInput"></a>

```csharp
public string MethodInput { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference <a name="GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.putMethodSelectors">PutMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.resetMethodSelectors">ResetMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.resetServiceName">ResetServiceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMethodSelectors` <a name="PutMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.putMethodSelectors"></a>

```csharp
private void PutMethodSelectors(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.putMethodSelectors.parameter.value"></a>

- *Type:* object

---

##### `ResetMethodSelectors` <a name="ResetMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.resetMethodSelectors"></a>

```csharp
private void ResetMethodSelectors()
```

##### `ResetServiceName` <a name="ResetServiceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.resetServiceName"></a>

```csharp
private void ResetServiceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.methodSelectors">MethodSelectors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.methodSelectorsInput">MethodSelectorsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MethodSelectors`<sup>Required</sup> <a name="MethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.methodSelectors"></a>

```csharp
public GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList MethodSelectors { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList</a>

---

##### `MethodSelectorsInput`<sup>Optional</sup> <a name="MethodSelectorsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.methodSelectorsInput"></a>

```csharp
public object MethodSelectorsInput { get; }
```

- *Type:* object

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference <a name="GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.putOperations">PutOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.resetExternalResources">ResetExternalResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.resetOperations">ResetOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.resetResources">ResetResources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOperations` <a name="PutOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.putOperations"></a>

```csharp
private void PutOperations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.putOperations.parameter.value"></a>

- *Type:* object

---

##### `ResetExternalResources` <a name="ResetExternalResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.resetExternalResources"></a>

```csharp
private void ResetExternalResources()
```

##### `ResetOperations` <a name="ResetOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.resetOperations"></a>

```csharp
private void ResetOperations()
```

##### `ResetResources` <a name="ResetResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.resetResources"></a>

```csharp
private void ResetResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.operations">Operations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.externalResourcesInput">ExternalResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.operationsInput">OperationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.externalResources">ExternalResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.resources">Resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Operations`<sup>Required</sup> <a name="Operations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.operations"></a>

```csharp
public GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList Operations { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList</a>

---

##### `ExternalResourcesInput`<sup>Optional</sup> <a name="ExternalResourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.externalResourcesInput"></a>

```csharp
public string[] ExternalResourcesInput { get; }
```

- *Type:* string[]

---

##### `OperationsInput`<sup>Optional</sup> <a name="OperationsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.operationsInput"></a>

```csharp
public object OperationsInput { get; }
```

- *Type:* object

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.resourcesInput"></a>

```csharp
public string[] ResourcesInput { get; }
```

- *Type:* string[]

---

##### `ExternalResources`<sup>Required</sup> <a name="ExternalResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.externalResources"></a>

```csharp
public string[] ExternalResources { get; }
```

- *Type:* string[]

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.resources"></a>

```csharp
public string[] Resources { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.internalValue"></a>

```csharp
public GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo">GoogleAccessContextManagerServicePerimeterEgressPolicyEgressTo</a>

---


### GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference <a name="GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterEgressPolicy.GoogleAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



