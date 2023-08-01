# `google_binary_authorization_attestor_iam_binding`

Refer to the Terraform Registory for docs: [`google_binary_authorization_attestor_iam_binding`](https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_binary_authorization_attestor_iam_binding).

# `googleBinaryAuthorizationAttestorIamBinding` Submodule <a name="`googleBinaryAuthorizationAttestorIamBinding` Submodule" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBinaryAuthorizationAttestorIamBinding <a name="GoogleBinaryAuthorizationAttestorIamBinding" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_binary_authorization_attestor_iam_binding google_binary_authorization_attestor_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBinaryAuthorizationAttestorIamBinding(Construct Scope, string Id, GoogleBinaryAuthorizationAttestorIamBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConfig">GoogleBinaryAuthorizationAttestorIamBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConfig">GoogleBinaryAuthorizationAttestorIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.putCondition"></a>

```csharp
private void PutCondition(GoogleBinaryAuthorizationAttestorIamBindingCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingCondition">GoogleBinaryAuthorizationAttestorIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBinaryAuthorizationAttestorIamBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBinaryAuthorizationAttestorIamBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBinaryAuthorizationAttestorIamBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference">GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.attestorInput">AttestorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingCondition">GoogleBinaryAuthorizationAttestorIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.membersInput">MembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.attestor">Attestor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.members">Members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.role">Role</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.condition"></a>

```csharp
public GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference">GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `AttestorInput`<sup>Optional</sup> <a name="AttestorInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.attestorInput"></a>

```csharp
public string AttestorInput { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.conditionInput"></a>

```csharp
public GoogleBinaryAuthorizationAttestorIamBindingCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingCondition">GoogleBinaryAuthorizationAttestorIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.membersInput"></a>

```csharp
public string[] MembersInput { get; }
```

- *Type:* string[]

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `Attestor`<sup>Required</sup> <a name="Attestor" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.attestor"></a>

```csharp
public string Attestor { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.members"></a>

```csharp
public string[] Members { get; }
```

- *Type:* string[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBinaryAuthorizationAttestorIamBindingCondition <a name="GoogleBinaryAuthorizationAttestorIamBindingCondition" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBinaryAuthorizationAttestorIamBindingCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_binary_authorization_attestor_iam_binding#expression GoogleBinaryAuthorizationAttestorIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_binary_authorization_attestor_iam_binding#title GoogleBinaryAuthorizationAttestorIamBinding#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_binary_authorization_attestor_iam_binding#description GoogleBinaryAuthorizationAttestorIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_binary_authorization_attestor_iam_binding#expression GoogleBinaryAuthorizationAttestorIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_binary_authorization_attestor_iam_binding#title GoogleBinaryAuthorizationAttestorIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_binary_authorization_attestor_iam_binding#description GoogleBinaryAuthorizationAttestorIamBinding#description}.

---

### GoogleBinaryAuthorizationAttestorIamBindingConfig <a name="GoogleBinaryAuthorizationAttestorIamBindingConfig" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBinaryAuthorizationAttestorIamBindingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Attestor,
    string[] Members,
    string Role,
    GoogleBinaryAuthorizationAttestorIamBindingCondition Condition = null,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConfig.property.attestor">Attestor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_binary_authorization_attestor_iam_binding#attestor GoogleBinaryAuthorizationAttestorIamBinding#attestor}. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConfig.property.members">Members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_binary_authorization_attestor_iam_binding#members GoogleBinaryAuthorizationAttestorIamBinding#members}. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_binary_authorization_attestor_iam_binding#role GoogleBinaryAuthorizationAttestorIamBinding#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingCondition">GoogleBinaryAuthorizationAttestorIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_binary_authorization_attestor_iam_binding#id GoogleBinaryAuthorizationAttestorIamBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_binary_authorization_attestor_iam_binding#project GoogleBinaryAuthorizationAttestorIamBinding#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Attestor`<sup>Required</sup> <a name="Attestor" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConfig.property.attestor"></a>

```csharp
public string Attestor { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_binary_authorization_attestor_iam_binding#attestor GoogleBinaryAuthorizationAttestorIamBinding#attestor}.

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConfig.property.members"></a>

```csharp
public string[] Members { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_binary_authorization_attestor_iam_binding#members GoogleBinaryAuthorizationAttestorIamBinding#members}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_binary_authorization_attestor_iam_binding#role GoogleBinaryAuthorizationAttestorIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConfig.property.condition"></a>

```csharp
public GoogleBinaryAuthorizationAttestorIamBindingCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingCondition">GoogleBinaryAuthorizationAttestorIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_binary_authorization_attestor_iam_binding#condition GoogleBinaryAuthorizationAttestorIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_binary_authorization_attestor_iam_binding#id GoogleBinaryAuthorizationAttestorIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_binary_authorization_attestor_iam_binding#project GoogleBinaryAuthorizationAttestorIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference <a name="GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingCondition">GoogleBinaryAuthorizationAttestorIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingConditionOutputReference.property.internalValue"></a>

```csharp
public GoogleBinaryAuthorizationAttestorIamBindingCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestorIamBinding.GoogleBinaryAuthorizationAttestorIamBindingCondition">GoogleBinaryAuthorizationAttestorIamBindingCondition</a>

---



