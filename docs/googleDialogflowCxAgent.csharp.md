# `google_dialogflow_cx_agent`

Refer to the Terraform Registory for docs: [`google_dialogflow_cx_agent`](https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_dialogflow_cx_agent).

# `googleDialogflowCxAgent` Submodule <a name="`googleDialogflowCxAgent` Submodule" id="@cdktf/provider-google-beta.googleDialogflowCxAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowCxAgent <a name="GoogleDialogflowCxAgent" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_dialogflow_cx_agent google_dialogflow_cx_agent}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxAgent(Construct Scope, string Id, GoogleDialogflowCxAgentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig">GoogleDialogflowCxAgentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig">GoogleDialogflowCxAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.putSpeechToTextSettings">PutSpeechToTextSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetAvatarUri">ResetAvatarUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetEnableSpellCorrection">ResetEnableSpellCorrection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetEnableStackdriverLogging">ResetEnableStackdriverLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetSecuritySettings">ResetSecuritySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetSpeechToTextSettings">ResetSpeechToTextSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetSupportedLanguageCodes">ResetSupportedLanguageCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutSpeechToTextSettings` <a name="PutSpeechToTextSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.putSpeechToTextSettings"></a>

```csharp
private void PutSpeechToTextSettings(GoogleDialogflowCxAgentSpeechToTextSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.putSpeechToTextSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettings">GoogleDialogflowCxAgentSpeechToTextSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleDialogflowCxAgentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts">GoogleDialogflowCxAgentTimeouts</a>

---

##### `ResetAvatarUri` <a name="ResetAvatarUri" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetAvatarUri"></a>

```csharp
private void ResetAvatarUri()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnableSpellCorrection` <a name="ResetEnableSpellCorrection" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetEnableSpellCorrection"></a>

```csharp
private void ResetEnableSpellCorrection()
```

##### `ResetEnableStackdriverLogging` <a name="ResetEnableStackdriverLogging" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetEnableStackdriverLogging"></a>

```csharp
private void ResetEnableStackdriverLogging()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetSecuritySettings` <a name="ResetSecuritySettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetSecuritySettings"></a>

```csharp
private void ResetSecuritySettings()
```

##### `ResetSpeechToTextSettings` <a name="ResetSpeechToTextSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetSpeechToTextSettings"></a>

```csharp
private void ResetSpeechToTextSettings()
```

##### `ResetSupportedLanguageCodes` <a name="ResetSupportedLanguageCodes" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetSupportedLanguageCodes"></a>

```csharp
private void ResetSupportedLanguageCodes()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDialogflowCxAgent.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDialogflowCxAgent.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDialogflowCxAgent.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.speechToTextSettings">SpeechToTextSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference">GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.startFlow">StartFlow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference">GoogleDialogflowCxAgentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.avatarUriInput">AvatarUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.defaultLanguageCodeInput">DefaultLanguageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.enableSpellCorrectionInput">EnableSpellCorrectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.enableStackdriverLoggingInput">EnableStackdriverLoggingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.securitySettingsInput">SecuritySettingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.speechToTextSettingsInput">SpeechToTextSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettings">GoogleDialogflowCxAgentSpeechToTextSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.supportedLanguageCodesInput">SupportedLanguageCodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.avatarUri">AvatarUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.defaultLanguageCode">DefaultLanguageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.enableSpellCorrection">EnableSpellCorrection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.enableStackdriverLogging">EnableStackdriverLogging</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.securitySettings">SecuritySettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.supportedLanguageCodes">SupportedLanguageCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SpeechToTextSettings`<sup>Required</sup> <a name="SpeechToTextSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.speechToTextSettings"></a>

```csharp
public GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference SpeechToTextSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference">GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference</a>

---

##### `StartFlow`<sup>Required</sup> <a name="StartFlow" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.startFlow"></a>

```csharp
public string StartFlow { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.timeouts"></a>

```csharp
public GoogleDialogflowCxAgentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference">GoogleDialogflowCxAgentTimeoutsOutputReference</a>

---

##### `AvatarUriInput`<sup>Optional</sup> <a name="AvatarUriInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.avatarUriInput"></a>

```csharp
public string AvatarUriInput { get; }
```

- *Type:* string

---

##### `DefaultLanguageCodeInput`<sup>Optional</sup> <a name="DefaultLanguageCodeInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.defaultLanguageCodeInput"></a>

```csharp
public string DefaultLanguageCodeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnableSpellCorrectionInput`<sup>Optional</sup> <a name="EnableSpellCorrectionInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.enableSpellCorrectionInput"></a>

```csharp
public object EnableSpellCorrectionInput { get; }
```

- *Type:* object

---

##### `EnableStackdriverLoggingInput`<sup>Optional</sup> <a name="EnableStackdriverLoggingInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.enableStackdriverLoggingInput"></a>

```csharp
public object EnableStackdriverLoggingInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SecuritySettingsInput`<sup>Optional</sup> <a name="SecuritySettingsInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.securitySettingsInput"></a>

```csharp
public string SecuritySettingsInput { get; }
```

- *Type:* string

---

##### `SpeechToTextSettingsInput`<sup>Optional</sup> <a name="SpeechToTextSettingsInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.speechToTextSettingsInput"></a>

```csharp
public GoogleDialogflowCxAgentSpeechToTextSettings SpeechToTextSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettings">GoogleDialogflowCxAgentSpeechToTextSettings</a>

---

##### `SupportedLanguageCodesInput`<sup>Optional</sup> <a name="SupportedLanguageCodesInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.supportedLanguageCodesInput"></a>

```csharp
public string[] SupportedLanguageCodesInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `AvatarUri`<sup>Required</sup> <a name="AvatarUri" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.avatarUri"></a>

```csharp
public string AvatarUri { get; }
```

- *Type:* string

---

##### `DefaultLanguageCode`<sup>Required</sup> <a name="DefaultLanguageCode" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.defaultLanguageCode"></a>

```csharp
public string DefaultLanguageCode { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EnableSpellCorrection`<sup>Required</sup> <a name="EnableSpellCorrection" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.enableSpellCorrection"></a>

```csharp
public object EnableSpellCorrection { get; }
```

- *Type:* object

---

##### `EnableStackdriverLogging`<sup>Required</sup> <a name="EnableStackdriverLogging" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.enableStackdriverLogging"></a>

```csharp
public object EnableStackdriverLogging { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SecuritySettings`<sup>Required</sup> <a name="SecuritySettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.securitySettings"></a>

```csharp
public string SecuritySettings { get; }
```

- *Type:* string

---

##### `SupportedLanguageCodes`<sup>Required</sup> <a name="SupportedLanguageCodes" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.supportedLanguageCodes"></a>

```csharp
public string[] SupportedLanguageCodes { get; }
```

- *Type:* string[]

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowCxAgentConfig <a name="GoogleDialogflowCxAgentConfig" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxAgentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DefaultLanguageCode,
    string DisplayName,
    string Location,
    string TimeZone,
    string AvatarUri = null,
    string Description = null,
    object EnableSpellCorrection = null,
    object EnableStackdriverLogging = null,
    string Id = null,
    string Project = null,
    string SecuritySettings = null,
    GoogleDialogflowCxAgentSpeechToTextSettings SpeechToTextSettings = null,
    string[] SupportedLanguageCodes = null,
    GoogleDialogflowCxAgentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.defaultLanguageCode">DefaultLanguageCode</a></code> | <code>string</code> | The default language of the agent as a language tag. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The human-readable name of the agent, unique within the location. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.location">Location</a></code> | <code>string</code> | The name of the location this agent is located in. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.timeZone">TimeZone</a></code> | <code>string</code> | The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.avatarUri">AvatarUri</a></code> | <code>string</code> | The URI of the agent's avatar. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.description">Description</a></code> | <code>string</code> | The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.enableSpellCorrection">EnableSpellCorrection</a></code> | <code>object</code> | Indicates if automatic spell correction is enabled in detect intent requests. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.enableStackdriverLogging">EnableStackdriverLogging</a></code> | <code>object</code> | Determines whether this agent should log conversation queries. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_dialogflow_cx_agent#id GoogleDialogflowCxAgent#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_dialogflow_cx_agent#project GoogleDialogflowCxAgent#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.securitySettings">SecuritySettings</a></code> | <code>string</code> | Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.speechToTextSettings">SpeechToTextSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettings">GoogleDialogflowCxAgentSpeechToTextSettings</a></code> | speech_to_text_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.supportedLanguageCodes">SupportedLanguageCodes</a></code> | <code>string[]</code> | The list of all languages supported by this agent (except for the default_language_code). |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts">GoogleDialogflowCxAgentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DefaultLanguageCode`<sup>Required</sup> <a name="DefaultLanguageCode" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.defaultLanguageCode"></a>

```csharp
public string DefaultLanguageCode { get; set; }
```

- *Type:* string

The default language of the agent as a language tag.

[See Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language)
for a list of the currently supported language codes. This field cannot be updated after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_dialogflow_cx_agent#default_language_code GoogleDialogflowCxAgent#default_language_code}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The human-readable name of the agent, unique within the location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_dialogflow_cx_agent#display_name GoogleDialogflowCxAgent#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The name of the location this agent is located in.

~> **Note:** The first time you are deploying an Agent in your project you must configure location settings.
This is a one time step but at the moment you can only [configure location settings](https://cloud.google.com/dialogflow/cx/docs/concept/region#location-settings) via the Dialogflow CX console.
Another options is to use global location so you don't need to manually configure location settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_dialogflow_cx_agent#location GoogleDialogflowCxAgent#location}

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_dialogflow_cx_agent#time_zone GoogleDialogflowCxAgent#time_zone}

---

##### `AvatarUri`<sup>Optional</sup> <a name="AvatarUri" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.avatarUri"></a>

```csharp
public string AvatarUri { get; set; }
```

- *Type:* string

The URI of the agent's avatar.

Avatars are used throughout the Dialogflow console and in the self-hosted Web Demo integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_dialogflow_cx_agent#avatar_uri GoogleDialogflowCxAgent#avatar_uri}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_dialogflow_cx_agent#description GoogleDialogflowCxAgent#description}

---

##### `EnableSpellCorrection`<sup>Optional</sup> <a name="EnableSpellCorrection" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.enableSpellCorrection"></a>

```csharp
public object EnableSpellCorrection { get; set; }
```

- *Type:* object

Indicates if automatic spell correction is enabled in detect intent requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_dialogflow_cx_agent#enable_spell_correction GoogleDialogflowCxAgent#enable_spell_correction}

---

##### `EnableStackdriverLogging`<sup>Optional</sup> <a name="EnableStackdriverLogging" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.enableStackdriverLogging"></a>

```csharp
public object EnableStackdriverLogging { get; set; }
```

- *Type:* object

Determines whether this agent should log conversation queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_dialogflow_cx_agent#enable_stackdriver_logging GoogleDialogflowCxAgent#enable_stackdriver_logging}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_dialogflow_cx_agent#id GoogleDialogflowCxAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_dialogflow_cx_agent#project GoogleDialogflowCxAgent#project}.

---

##### `SecuritySettings`<sup>Optional</sup> <a name="SecuritySettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.securitySettings"></a>

```csharp
public string SecuritySettings { get; set; }
```

- *Type:* string

Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_dialogflow_cx_agent#security_settings GoogleDialogflowCxAgent#security_settings}

---

##### `SpeechToTextSettings`<sup>Optional</sup> <a name="SpeechToTextSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.speechToTextSettings"></a>

```csharp
public GoogleDialogflowCxAgentSpeechToTextSettings SpeechToTextSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettings">GoogleDialogflowCxAgentSpeechToTextSettings</a>

speech_to_text_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_dialogflow_cx_agent#speech_to_text_settings GoogleDialogflowCxAgent#speech_to_text_settings}

---

##### `SupportedLanguageCodes`<sup>Optional</sup> <a name="SupportedLanguageCodes" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.supportedLanguageCodes"></a>

```csharp
public string[] SupportedLanguageCodes { get; set; }
```

- *Type:* string[]

The list of all languages supported by this agent (except for the default_language_code).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_dialogflow_cx_agent#supported_language_codes GoogleDialogflowCxAgent#supported_language_codes}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.timeouts"></a>

```csharp
public GoogleDialogflowCxAgentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts">GoogleDialogflowCxAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_dialogflow_cx_agent#timeouts GoogleDialogflowCxAgent#timeouts}

---

### GoogleDialogflowCxAgentSpeechToTextSettings <a name="GoogleDialogflowCxAgentSpeechToTextSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxAgentSpeechToTextSettings {
    object EnableSpeechAdaptation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettings.property.enableSpeechAdaptation">EnableSpeechAdaptation</a></code> | <code>object</code> | Whether to use speech adaptation for speech recognition. |

---

##### `EnableSpeechAdaptation`<sup>Optional</sup> <a name="EnableSpeechAdaptation" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettings.property.enableSpeechAdaptation"></a>

```csharp
public object EnableSpeechAdaptation { get; set; }
```

- *Type:* object

Whether to use speech adaptation for speech recognition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_dialogflow_cx_agent#enable_speech_adaptation GoogleDialogflowCxAgent#enable_speech_adaptation}

---

### GoogleDialogflowCxAgentTimeouts <a name="GoogleDialogflowCxAgentTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxAgentTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_dialogflow_cx_agent#create GoogleDialogflowCxAgent#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_dialogflow_cx_agent#delete GoogleDialogflowCxAgent#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_dialogflow_cx_agent#update GoogleDialogflowCxAgent#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_dialogflow_cx_agent#create GoogleDialogflowCxAgent#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_dialogflow_cx_agent#delete GoogleDialogflowCxAgent#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_dialogflow_cx_agent#update GoogleDialogflowCxAgent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference <a name="GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.resetEnableSpeechAdaptation">ResetEnableSpeechAdaptation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableSpeechAdaptation` <a name="ResetEnableSpeechAdaptation" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.resetEnableSpeechAdaptation"></a>

```csharp
private void ResetEnableSpeechAdaptation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.property.enableSpeechAdaptationInput">EnableSpeechAdaptationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.property.enableSpeechAdaptation">EnableSpeechAdaptation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettings">GoogleDialogflowCxAgentSpeechToTextSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableSpeechAdaptationInput`<sup>Optional</sup> <a name="EnableSpeechAdaptationInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.property.enableSpeechAdaptationInput"></a>

```csharp
public object EnableSpeechAdaptationInput { get; }
```

- *Type:* object

---

##### `EnableSpeechAdaptation`<sup>Required</sup> <a name="EnableSpeechAdaptation" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.property.enableSpeechAdaptation"></a>

```csharp
public object EnableSpeechAdaptation { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleDialogflowCxAgentSpeechToTextSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettings">GoogleDialogflowCxAgentSpeechToTextSettings</a>

---


### GoogleDialogflowCxAgentTimeoutsOutputReference <a name="GoogleDialogflowCxAgentTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxAgentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



