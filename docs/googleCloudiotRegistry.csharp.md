# `google_cloudiot_registry`

Refer to the Terraform Registory for docs: [`google_cloudiot_registry`](https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_registry).

# `googleCloudiotRegistry` Submodule <a name="`googleCloudiotRegistry` Submodule" id="@cdktf/provider-google-beta.googleCloudiotRegistry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudiotRegistry <a name="GoogleCloudiotRegistry" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_registry google_cloudiot_registry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudiotRegistry(Construct Scope, string Id, GoogleCloudiotRegistryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig">GoogleCloudiotRegistryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig">GoogleCloudiotRegistryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.putCredentials">PutCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.putEventNotificationConfigs">PutEventNotificationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetCredentials">ResetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetEventNotificationConfigs">ResetEventNotificationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetHttpConfig">ResetHttpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetLogLevel">ResetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetMqttConfig">ResetMqttConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetStateNotificationConfig">ResetStateNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutCredentials` <a name="PutCredentials" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.putCredentials"></a>

```csharp
private void PutCredentials(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.putCredentials.parameter.value"></a>

- *Type:* object

---

##### `PutEventNotificationConfigs` <a name="PutEventNotificationConfigs" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.putEventNotificationConfigs"></a>

```csharp
private void PutEventNotificationConfigs(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.putEventNotificationConfigs.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleCloudiotRegistryTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeouts">GoogleCloudiotRegistryTimeouts</a>

---

##### `ResetCredentials` <a name="ResetCredentials" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetCredentials"></a>

```csharp
private void ResetCredentials()
```

##### `ResetEventNotificationConfigs` <a name="ResetEventNotificationConfigs" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetEventNotificationConfigs"></a>

```csharp
private void ResetEventNotificationConfigs()
```

##### `ResetHttpConfig` <a name="ResetHttpConfig" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetHttpConfig"></a>

```csharp
private void ResetHttpConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogLevel` <a name="ResetLogLevel" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetLogLevel"></a>

```csharp
private void ResetLogLevel()
```

##### `ResetMqttConfig` <a name="ResetMqttConfig" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetMqttConfig"></a>

```csharp
private void ResetMqttConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetStateNotificationConfig` <a name="ResetStateNotificationConfig" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetStateNotificationConfig"></a>

```csharp
private void ResetStateNotificationConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleCloudiotRegistry.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleCloudiotRegistry.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleCloudiotRegistry.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.credentials">Credentials</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList">GoogleCloudiotRegistryCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.eventNotificationConfigs">EventNotificationConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList">GoogleCloudiotRegistryEventNotificationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference">GoogleCloudiotRegistryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.credentialsInput">CredentialsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.eventNotificationConfigsInput">EventNotificationConfigsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.httpConfigInput">HttpConfigInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.logLevelInput">LogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.mqttConfigInput">MqttConfigInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.stateNotificationConfigInput">StateNotificationConfigInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.httpConfig">HttpConfig</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.logLevel">LogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.mqttConfig">MqttConfig</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.stateNotificationConfig">StateNotificationConfig</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.credentials"></a>

```csharp
public GoogleCloudiotRegistryCredentialsList Credentials { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList">GoogleCloudiotRegistryCredentialsList</a>

---

##### `EventNotificationConfigs`<sup>Required</sup> <a name="EventNotificationConfigs" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.eventNotificationConfigs"></a>

```csharp
public GoogleCloudiotRegistryEventNotificationConfigsList EventNotificationConfigs { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList">GoogleCloudiotRegistryEventNotificationConfigsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.timeouts"></a>

```csharp
public GoogleCloudiotRegistryTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference">GoogleCloudiotRegistryTimeoutsOutputReference</a>

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.credentialsInput"></a>

```csharp
public object CredentialsInput { get; }
```

- *Type:* object

---

##### `EventNotificationConfigsInput`<sup>Optional</sup> <a name="EventNotificationConfigsInput" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.eventNotificationConfigsInput"></a>

```csharp
public object EventNotificationConfigsInput { get; }
```

- *Type:* object

---

##### `HttpConfigInput`<sup>Optional</sup> <a name="HttpConfigInput" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.httpConfigInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HttpConfigInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.logLevelInput"></a>

```csharp
public string LogLevelInput { get; }
```

- *Type:* string

---

##### `MqttConfigInput`<sup>Optional</sup> <a name="MqttConfigInput" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.mqttConfigInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MqttConfigInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `StateNotificationConfigInput`<sup>Optional</sup> <a name="StateNotificationConfigInput" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.stateNotificationConfigInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> StateNotificationConfigInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `HttpConfig`<sup>Required</sup> <a name="HttpConfig" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.httpConfig"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HttpConfig { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.logLevel"></a>

```csharp
public string LogLevel { get; }
```

- *Type:* string

---

##### `MqttConfig`<sup>Required</sup> <a name="MqttConfig" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.mqttConfig"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MqttConfig { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `StateNotificationConfig`<sup>Required</sup> <a name="StateNotificationConfig" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.stateNotificationConfig"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> StateNotificationConfig { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistry.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudiotRegistryConfig <a name="GoogleCloudiotRegistryConfig" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudiotRegistryConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    object Credentials = null,
    object EventNotificationConfigs = null,
    System.Collections.Generic.IDictionary<string, string> HttpConfig = null,
    string Id = null,
    string LogLevel = null,
    System.Collections.Generic.IDictionary<string, string> MqttConfig = null,
    string Project = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> StateNotificationConfig = null,
    GoogleCloudiotRegistryTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.name">Name</a></code> | <code>string</code> | A unique name for the resource, required by device registry. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.credentials">Credentials</a></code> | <code>object</code> | credentials block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.eventNotificationConfigs">EventNotificationConfigs</a></code> | <code>object</code> | event_notification_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.httpConfig">HttpConfig</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Activate or deactivate HTTP. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_registry#id GoogleCloudiotRegistry#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.logLevel">LogLevel</a></code> | <code>string</code> | The default logging verbosity for activity from devices in this registry. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.mqttConfig">MqttConfig</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Activate or deactivate MQTT. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_registry#project GoogleCloudiotRegistry#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.region">Region</a></code> | <code>string</code> | The region in which the created registry should reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.stateNotificationConfig">StateNotificationConfig</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A PubSub topic to publish device state updates. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeouts">GoogleCloudiotRegistryTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A unique name for the resource, required by device registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_registry#name GoogleCloudiotRegistry#name}

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.credentials"></a>

```csharp
public object Credentials { get; set; }
```

- *Type:* object

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_registry#credentials GoogleCloudiotRegistry#credentials}

---

##### `EventNotificationConfigs`<sup>Optional</sup> <a name="EventNotificationConfigs" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.eventNotificationConfigs"></a>

```csharp
public object EventNotificationConfigs { get; set; }
```

- *Type:* object

event_notification_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_registry#event_notification_configs GoogleCloudiotRegistry#event_notification_configs}

---

##### `HttpConfig`<sup>Optional</sup> <a name="HttpConfig" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.httpConfig"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HttpConfig { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Activate or deactivate HTTP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_registry#http_config GoogleCloudiotRegistry#http_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_registry#id GoogleCloudiotRegistry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.logLevel"></a>

```csharp
public string LogLevel { get; set; }
```

- *Type:* string

The default logging verbosity for activity from devices in this registry.

Specifies which events should be written to logs. For
example, if the LogLevel is ERROR, only events that terminate in
errors will be logged. LogLevel is inclusive; enabling INFO logging
will also enable ERROR logging. Default value: "NONE" Possible values: ["NONE", "ERROR", "INFO", "DEBUG"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_registry#log_level GoogleCloudiotRegistry#log_level}

---

##### `MqttConfig`<sup>Optional</sup> <a name="MqttConfig" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.mqttConfig"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MqttConfig { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Activate or deactivate MQTT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_registry#mqtt_config GoogleCloudiotRegistry#mqtt_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_registry#project GoogleCloudiotRegistry#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region in which the created registry should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_registry#region GoogleCloudiotRegistry#region}

---

##### `StateNotificationConfig`<sup>Optional</sup> <a name="StateNotificationConfig" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.stateNotificationConfig"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> StateNotificationConfig { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A PubSub topic to publish device state updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_registry#state_notification_config GoogleCloudiotRegistry#state_notification_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryConfig.property.timeouts"></a>

```csharp
public GoogleCloudiotRegistryTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeouts">GoogleCloudiotRegistryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_registry#timeouts GoogleCloudiotRegistry#timeouts}

---

### GoogleCloudiotRegistryCredentials <a name="GoogleCloudiotRegistryCredentials" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudiotRegistryCredentials {
    System.Collections.Generic.IDictionary<string, string> PublicKeyCertificate
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentials.property.publicKeyCertificate">PublicKeyCertificate</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A public key certificate format and data. |

---

##### `PublicKeyCertificate`<sup>Required</sup> <a name="PublicKeyCertificate" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentials.property.publicKeyCertificate"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PublicKeyCertificate { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A public key certificate format and data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_registry#public_key_certificate GoogleCloudiotRegistry#public_key_certificate}

---

### GoogleCloudiotRegistryEventNotificationConfigs <a name="GoogleCloudiotRegistryEventNotificationConfigs" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudiotRegistryEventNotificationConfigs {
    string PubsubTopicName,
    string SubfolderMatches = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigs.property.pubsubTopicName">PubsubTopicName</a></code> | <code>string</code> | PubSub topic name to publish device events. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigs.property.subfolderMatches">SubfolderMatches</a></code> | <code>string</code> | If the subfolder name matches this string exactly, this configuration will be used. |

---

##### `PubsubTopicName`<sup>Required</sup> <a name="PubsubTopicName" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigs.property.pubsubTopicName"></a>

```csharp
public string PubsubTopicName { get; set; }
```

- *Type:* string

PubSub topic name to publish device events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_registry#pubsub_topic_name GoogleCloudiotRegistry#pubsub_topic_name}

---

##### `SubfolderMatches`<sup>Optional</sup> <a name="SubfolderMatches" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigs.property.subfolderMatches"></a>

```csharp
public string SubfolderMatches { get; set; }
```

- *Type:* string

If the subfolder name matches this string exactly, this configuration will be used.

The string must not include the
leading '/' character. If empty, all strings are matched. Empty
value can only be used for the last 'event_notification_configs'
item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_registry#subfolder_matches GoogleCloudiotRegistry#subfolder_matches}

---

### GoogleCloudiotRegistryTimeouts <a name="GoogleCloudiotRegistryTimeouts" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudiotRegistryTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_registry#create GoogleCloudiotRegistry#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_registry#delete GoogleCloudiotRegistry#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_registry#update GoogleCloudiotRegistry#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_registry#create GoogleCloudiotRegistry#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_registry#delete GoogleCloudiotRegistry#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_cloudiot_registry#update GoogleCloudiotRegistry#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudiotRegistryCredentialsList <a name="GoogleCloudiotRegistryCredentialsList" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudiotRegistryCredentialsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.get"></a>

```csharp
private GoogleCloudiotRegistryCredentialsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleCloudiotRegistryCredentialsOutputReference <a name="GoogleCloudiotRegistryCredentialsOutputReference" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudiotRegistryCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.property.publicKeyCertificateInput">PublicKeyCertificateInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.property.publicKeyCertificate">PublicKeyCertificate</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PublicKeyCertificateInput`<sup>Optional</sup> <a name="PublicKeyCertificateInput" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.property.publicKeyCertificateInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PublicKeyCertificateInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PublicKeyCertificate`<sup>Required</sup> <a name="PublicKeyCertificate" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.property.publicKeyCertificate"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PublicKeyCertificate { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryCredentialsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleCloudiotRegistryEventNotificationConfigsList <a name="GoogleCloudiotRegistryEventNotificationConfigsList" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudiotRegistryEventNotificationConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.get"></a>

```csharp
private GoogleCloudiotRegistryEventNotificationConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleCloudiotRegistryEventNotificationConfigsOutputReference <a name="GoogleCloudiotRegistryEventNotificationConfigsOutputReference" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudiotRegistryEventNotificationConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.resetSubfolderMatches">ResetSubfolderMatches</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSubfolderMatches` <a name="ResetSubfolderMatches" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.resetSubfolderMatches"></a>

```csharp
private void ResetSubfolderMatches()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.property.pubsubTopicNameInput">PubsubTopicNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.property.subfolderMatchesInput">SubfolderMatchesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.property.pubsubTopicName">PubsubTopicName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.property.subfolderMatches">SubfolderMatches</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PubsubTopicNameInput`<sup>Optional</sup> <a name="PubsubTopicNameInput" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.property.pubsubTopicNameInput"></a>

```csharp
public string PubsubTopicNameInput { get; }
```

- *Type:* string

---

##### `SubfolderMatchesInput`<sup>Optional</sup> <a name="SubfolderMatchesInput" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.property.subfolderMatchesInput"></a>

```csharp
public string SubfolderMatchesInput { get; }
```

- *Type:* string

---

##### `PubsubTopicName`<sup>Required</sup> <a name="PubsubTopicName" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.property.pubsubTopicName"></a>

```csharp
public string PubsubTopicName { get; }
```

- *Type:* string

---

##### `SubfolderMatches`<sup>Required</sup> <a name="SubfolderMatches" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.property.subfolderMatches"></a>

```csharp
public string SubfolderMatches { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryEventNotificationConfigsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleCloudiotRegistryTimeoutsOutputReference <a name="GoogleCloudiotRegistryTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudiotRegistryTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudiotRegistry.GoogleCloudiotRegistryTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



