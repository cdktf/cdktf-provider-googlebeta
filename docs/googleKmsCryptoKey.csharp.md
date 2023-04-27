# `google_kms_crypto_key`

Refer to the Terraform Registory for docs: [`google_kms_crypto_key`](https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_kms_crypto_key).

# `googleKmsCryptoKey` Submodule <a name="`googleKmsCryptoKey` Submodule" id="@cdktf/provider-google-beta.googleKmsCryptoKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleKmsCryptoKey <a name="GoogleKmsCryptoKey" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_kms_crypto_key google_kms_crypto_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleKmsCryptoKey(Construct Scope, string Id, GoogleKmsCryptoKeyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig">GoogleKmsCryptoKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig">GoogleKmsCryptoKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.putVersionTemplate">PutVersionTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetDestroyScheduledDuration">ResetDestroyScheduledDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetImportOnly">ResetImportOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetPurpose">ResetPurpose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetRotationPeriod">ResetRotationPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetSkipInitialVersionCreation">ResetSkipInitialVersionCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetVersionTemplate">ResetVersionTemplate</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleKmsCryptoKeyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts">GoogleKmsCryptoKeyTimeouts</a>

---

##### `PutVersionTemplate` <a name="PutVersionTemplate" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.putVersionTemplate"></a>

```csharp
private void PutVersionTemplate(GoogleKmsCryptoKeyVersionTemplate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.putVersionTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate">GoogleKmsCryptoKeyVersionTemplate</a>

---

##### `ResetDestroyScheduledDuration` <a name="ResetDestroyScheduledDuration" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetDestroyScheduledDuration"></a>

```csharp
private void ResetDestroyScheduledDuration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImportOnly` <a name="ResetImportOnly" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetImportOnly"></a>

```csharp
private void ResetImportOnly()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetPurpose` <a name="ResetPurpose" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetPurpose"></a>

```csharp
private void ResetPurpose()
```

##### `ResetRotationPeriod` <a name="ResetRotationPeriod" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetRotationPeriod"></a>

```csharp
private void ResetRotationPeriod()
```

##### `ResetSkipInitialVersionCreation` <a name="ResetSkipInitialVersionCreation" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetSkipInitialVersionCreation"></a>

```csharp
private void ResetSkipInitialVersionCreation()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVersionTemplate` <a name="ResetVersionTemplate" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.resetVersionTemplate"></a>

```csharp
private void ResetVersionTemplate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleKmsCryptoKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleKmsCryptoKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleKmsCryptoKey.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference">GoogleKmsCryptoKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.versionTemplate">VersionTemplate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference">GoogleKmsCryptoKeyVersionTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.destroyScheduledDurationInput">DestroyScheduledDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.importOnlyInput">ImportOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.keyRingInput">KeyRingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.purposeInput">PurposeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.rotationPeriodInput">RotationPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.skipInitialVersionCreationInput">SkipInitialVersionCreationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.versionTemplateInput">VersionTemplateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate">GoogleKmsCryptoKeyVersionTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.destroyScheduledDuration">DestroyScheduledDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.importOnly">ImportOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.keyRing">KeyRing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.purpose">Purpose</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.rotationPeriod">RotationPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.skipInitialVersionCreation">SkipInitialVersionCreation</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.timeouts"></a>

```csharp
public GoogleKmsCryptoKeyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference">GoogleKmsCryptoKeyTimeoutsOutputReference</a>

---

##### `VersionTemplate`<sup>Required</sup> <a name="VersionTemplate" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.versionTemplate"></a>

```csharp
public GoogleKmsCryptoKeyVersionTemplateOutputReference VersionTemplate { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference">GoogleKmsCryptoKeyVersionTemplateOutputReference</a>

---

##### `DestroyScheduledDurationInput`<sup>Optional</sup> <a name="DestroyScheduledDurationInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.destroyScheduledDurationInput"></a>

```csharp
public string DestroyScheduledDurationInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImportOnlyInput`<sup>Optional</sup> <a name="ImportOnlyInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.importOnlyInput"></a>

```csharp
public object ImportOnlyInput { get; }
```

- *Type:* object

---

##### `KeyRingInput`<sup>Optional</sup> <a name="KeyRingInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.keyRingInput"></a>

```csharp
public string KeyRingInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PurposeInput`<sup>Optional</sup> <a name="PurposeInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.purposeInput"></a>

```csharp
public string PurposeInput { get; }
```

- *Type:* string

---

##### `RotationPeriodInput`<sup>Optional</sup> <a name="RotationPeriodInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.rotationPeriodInput"></a>

```csharp
public string RotationPeriodInput { get; }
```

- *Type:* string

---

##### `SkipInitialVersionCreationInput`<sup>Optional</sup> <a name="SkipInitialVersionCreationInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.skipInitialVersionCreationInput"></a>

```csharp
public object SkipInitialVersionCreationInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VersionTemplateInput`<sup>Optional</sup> <a name="VersionTemplateInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.versionTemplateInput"></a>

```csharp
public GoogleKmsCryptoKeyVersionTemplate VersionTemplateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate">GoogleKmsCryptoKeyVersionTemplate</a>

---

##### `DestroyScheduledDuration`<sup>Required</sup> <a name="DestroyScheduledDuration" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.destroyScheduledDuration"></a>

```csharp
public string DestroyScheduledDuration { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImportOnly`<sup>Required</sup> <a name="ImportOnly" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.importOnly"></a>

```csharp
public object ImportOnly { get; }
```

- *Type:* object

---

##### `KeyRing`<sup>Required</sup> <a name="KeyRing" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.keyRing"></a>

```csharp
public string KeyRing { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Purpose`<sup>Required</sup> <a name="Purpose" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.purpose"></a>

```csharp
public string Purpose { get; }
```

- *Type:* string

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.rotationPeriod"></a>

```csharp
public string RotationPeriod { get; }
```

- *Type:* string

---

##### `SkipInitialVersionCreation`<sup>Required</sup> <a name="SkipInitialVersionCreation" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.skipInitialVersionCreation"></a>

```csharp
public object SkipInitialVersionCreation { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleKmsCryptoKeyConfig <a name="GoogleKmsCryptoKeyConfig" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleKmsCryptoKeyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string KeyRing,
    string Name,
    string DestroyScheduledDuration = null,
    string Id = null,
    object ImportOnly = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Purpose = null,
    string RotationPeriod = null,
    object SkipInitialVersionCreation = null,
    GoogleKmsCryptoKeyTimeouts Timeouts = null,
    GoogleKmsCryptoKeyVersionTemplate VersionTemplate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.keyRing">KeyRing</a></code> | <code>string</code> | The KeyRing that this key belongs to. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.name">Name</a></code> | <code>string</code> | The resource name for the CryptoKey. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.destroyScheduledDuration">DestroyScheduledDuration</a></code> | <code>string</code> | The period of time that versions of this key spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_kms_crypto_key#id GoogleKmsCryptoKey#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.importOnly">ImportOnly</a></code> | <code>object</code> | Whether this key may contain imported versions only. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels with user-defined metadata to apply to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.purpose">Purpose</a></code> | <code>string</code> | The immutable purpose of this CryptoKey. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.rotationPeriod">RotationPeriod</a></code> | <code>string</code> | Every time this period passes, generate a new CryptoKeyVersion and set it as the primary. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.skipInitialVersionCreation">SkipInitialVersionCreation</a></code> | <code>object</code> | If set to true, the request will create a CryptoKey without any CryptoKeyVersions. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts">GoogleKmsCryptoKeyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.versionTemplate">VersionTemplate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate">GoogleKmsCryptoKeyVersionTemplate</a></code> | version_template block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `KeyRing`<sup>Required</sup> <a name="KeyRing" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.keyRing"></a>

```csharp
public string KeyRing { get; set; }
```

- *Type:* string

The KeyRing that this key belongs to. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_kms_crypto_key#key_ring GoogleKmsCryptoKey#key_ring}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The resource name for the CryptoKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_kms_crypto_key#name GoogleKmsCryptoKey#name}

---

##### `DestroyScheduledDuration`<sup>Optional</sup> <a name="DestroyScheduledDuration" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.destroyScheduledDuration"></a>

```csharp
public string DestroyScheduledDuration { get; set; }
```

- *Type:* string

The period of time that versions of this key spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED.

If not specified at creation time, the default duration is 24 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_kms_crypto_key#destroy_scheduled_duration GoogleKmsCryptoKey#destroy_scheduled_duration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_kms_crypto_key#id GoogleKmsCryptoKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImportOnly`<sup>Optional</sup> <a name="ImportOnly" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.importOnly"></a>

```csharp
public object ImportOnly { get; set; }
```

- *Type:* object

Whether this key may contain imported versions only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_kms_crypto_key#import_only GoogleKmsCryptoKey#import_only}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels with user-defined metadata to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_kms_crypto_key#labels GoogleKmsCryptoKey#labels}

---

##### `Purpose`<sup>Optional</sup> <a name="Purpose" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.purpose"></a>

```csharp
public string Purpose { get; set; }
```

- *Type:* string

The immutable purpose of this CryptoKey.

See the
[purpose reference](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys#CryptoKeyPurpose)
for possible inputs. Default value: "ENCRYPT_DECRYPT" Possible values: ["ENCRYPT_DECRYPT", "ASYMMETRIC_SIGN", "ASYMMETRIC_DECRYPT", "MAC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_kms_crypto_key#purpose GoogleKmsCryptoKey#purpose}

---

##### `RotationPeriod`<sup>Optional</sup> <a name="RotationPeriod" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.rotationPeriod"></a>

```csharp
public string RotationPeriod { get; set; }
```

- *Type:* string

Every time this period passes, generate a new CryptoKeyVersion and set it as the primary.

The first rotation will take place after the specified period. The rotation period has
the format of a decimal number with up to 9 fractional digits, followed by the
letter 's' (seconds). It must be greater than a day (ie, 86400).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_kms_crypto_key#rotation_period GoogleKmsCryptoKey#rotation_period}

---

##### `SkipInitialVersionCreation`<sup>Optional</sup> <a name="SkipInitialVersionCreation" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.skipInitialVersionCreation"></a>

```csharp
public object SkipInitialVersionCreation { get; set; }
```

- *Type:* object

If set to true, the request will create a CryptoKey without any CryptoKeyVersions.

You must use the 'google_kms_key_ring_import_job' resource to import the CryptoKeyVersion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_kms_crypto_key#skip_initial_version_creation GoogleKmsCryptoKey#skip_initial_version_creation}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.timeouts"></a>

```csharp
public GoogleKmsCryptoKeyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts">GoogleKmsCryptoKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_kms_crypto_key#timeouts GoogleKmsCryptoKey#timeouts}

---

##### `VersionTemplate`<sup>Optional</sup> <a name="VersionTemplate" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyConfig.property.versionTemplate"></a>

```csharp
public GoogleKmsCryptoKeyVersionTemplate VersionTemplate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate">GoogleKmsCryptoKeyVersionTemplate</a>

version_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_kms_crypto_key#version_template GoogleKmsCryptoKey#version_template}

---

### GoogleKmsCryptoKeyTimeouts <a name="GoogleKmsCryptoKeyTimeouts" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleKmsCryptoKeyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_kms_crypto_key#create GoogleKmsCryptoKey#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_kms_crypto_key#delete GoogleKmsCryptoKey#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_kms_crypto_key#update GoogleKmsCryptoKey#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_kms_crypto_key#create GoogleKmsCryptoKey#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_kms_crypto_key#delete GoogleKmsCryptoKey#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_kms_crypto_key#update GoogleKmsCryptoKey#update}.

---

### GoogleKmsCryptoKeyVersionTemplate <a name="GoogleKmsCryptoKeyVersionTemplate" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleKmsCryptoKeyVersionTemplate {
    string Algorithm,
    string ProtectionLevel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate.property.algorithm">Algorithm</a></code> | <code>string</code> | The algorithm to use when creating a version based on this template. See the [algorithm reference](https://cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm) for possible inputs. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate.property.protectionLevel">ProtectionLevel</a></code> | <code>string</code> | The protection level to use when creating a version based on this template. |

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate.property.algorithm"></a>

```csharp
public string Algorithm { get; set; }
```

- *Type:* string

The algorithm to use when creating a version based on this template. See the [algorithm reference](https://cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm) for possible inputs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_kms_crypto_key#algorithm GoogleKmsCryptoKey#algorithm}

---

##### `ProtectionLevel`<sup>Optional</sup> <a name="ProtectionLevel" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate.property.protectionLevel"></a>

```csharp
public string ProtectionLevel { get; set; }
```

- *Type:* string

The protection level to use when creating a version based on this template.

Possible values include "SOFTWARE", "HSM", "EXTERNAL", "EXTERNAL_VPC". Defaults to "SOFTWARE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_kms_crypto_key#protection_level GoogleKmsCryptoKey#protection_level}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleKmsCryptoKeyTimeoutsOutputReference <a name="GoogleKmsCryptoKeyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleKmsCryptoKeyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleKmsCryptoKeyVersionTemplateOutputReference <a name="GoogleKmsCryptoKeyVersionTemplateOutputReference" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleKmsCryptoKeyVersionTemplateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.resetProtectionLevel">ResetProtectionLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProtectionLevel` <a name="ResetProtectionLevel" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.resetProtectionLevel"></a>

```csharp
private void ResetProtectionLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.protectionLevelInput">ProtectionLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.algorithm">Algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.protectionLevel">ProtectionLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate">GoogleKmsCryptoKeyVersionTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.algorithmInput"></a>

```csharp
public string AlgorithmInput { get; }
```

- *Type:* string

---

##### `ProtectionLevelInput`<sup>Optional</sup> <a name="ProtectionLevelInput" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.protectionLevelInput"></a>

```csharp
public string ProtectionLevelInput { get; }
```

- *Type:* string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.algorithm"></a>

```csharp
public string Algorithm { get; }
```

- *Type:* string

---

##### `ProtectionLevel`<sup>Required</sup> <a name="ProtectionLevel" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.protectionLevel"></a>

```csharp
public string ProtectionLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplateOutputReference.property.internalValue"></a>

```csharp
public GoogleKmsCryptoKeyVersionTemplate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKey.GoogleKmsCryptoKeyVersionTemplate">GoogleKmsCryptoKeyVersionTemplate</a>

---



