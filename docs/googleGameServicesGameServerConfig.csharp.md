# `google_game_services_game_server_config`

Refer to the Terraform Registory for docs: [`google_game_services_game_server_config`](https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_game_services_game_server_config).

# `googleGameServicesGameServerConfig` Submodule <a name="`googleGameServicesGameServerConfig` Submodule" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGameServicesGameServerConfig <a name="GoogleGameServicesGameServerConfig" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_game_services_game_server_config google_game_services_game_server_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGameServicesGameServerConfig(Construct Scope, string Id, GoogleGameServicesGameServerConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig">GoogleGameServicesGameServerConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig">GoogleGameServicesGameServerConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.putFleetConfigs">PutFleetConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.putScalingConfigs">PutScalingConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetScalingConfigs">ResetScalingConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFleetConfigs` <a name="PutFleetConfigs" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.putFleetConfigs"></a>

```csharp
private void PutFleetConfigs(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.putFleetConfigs.parameter.value"></a>

- *Type:* object

---

##### `PutScalingConfigs` <a name="PutScalingConfigs" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.putScalingConfigs"></a>

```csharp
private void PutScalingConfigs(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.putScalingConfigs.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleGameServicesGameServerConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeouts">GoogleGameServicesGameServerConfigTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetScalingConfigs` <a name="ResetScalingConfigs" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetScalingConfigs"></a>

```csharp
private void ResetScalingConfigs()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleGameServicesGameServerConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleGameServicesGameServerConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleGameServicesGameServerConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.fleetConfigs">FleetConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList">GoogleGameServicesGameServerConfigFleetConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.scalingConfigs">ScalingConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList">GoogleGameServicesGameServerConfigScalingConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference">GoogleGameServicesGameServerConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.configIdInput">ConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.deploymentIdInput">DeploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.fleetConfigsInput">FleetConfigsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.scalingConfigsInput">ScalingConfigsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.configId">ConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.deploymentId">DeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `FleetConfigs`<sup>Required</sup> <a name="FleetConfigs" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.fleetConfigs"></a>

```csharp
public GoogleGameServicesGameServerConfigFleetConfigsList FleetConfigs { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList">GoogleGameServicesGameServerConfigFleetConfigsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ScalingConfigs`<sup>Required</sup> <a name="ScalingConfigs" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.scalingConfigs"></a>

```csharp
public GoogleGameServicesGameServerConfigScalingConfigsList ScalingConfigs { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList">GoogleGameServicesGameServerConfigScalingConfigsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.timeouts"></a>

```csharp
public GoogleGameServicesGameServerConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference">GoogleGameServicesGameServerConfigTimeoutsOutputReference</a>

---

##### `ConfigIdInput`<sup>Optional</sup> <a name="ConfigIdInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.configIdInput"></a>

```csharp
public string ConfigIdInput { get; }
```

- *Type:* string

---

##### `DeploymentIdInput`<sup>Optional</sup> <a name="DeploymentIdInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.deploymentIdInput"></a>

```csharp
public string DeploymentIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FleetConfigsInput`<sup>Optional</sup> <a name="FleetConfigsInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.fleetConfigsInput"></a>

```csharp
public object FleetConfigsInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ScalingConfigsInput`<sup>Optional</sup> <a name="ScalingConfigsInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.scalingConfigsInput"></a>

```csharp
public object ScalingConfigsInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ConfigId`<sup>Required</sup> <a name="ConfigId" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.configId"></a>

```csharp
public string ConfigId { get; }
```

- *Type:* string

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.deploymentId"></a>

```csharp
public string DeploymentId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGameServicesGameServerConfigConfig <a name="GoogleGameServicesGameServerConfigConfig" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGameServicesGameServerConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ConfigId,
    string DeploymentId,
    object FleetConfigs,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Location = null,
    string Project = null,
    object ScalingConfigs = null,
    GoogleGameServicesGameServerConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.configId">ConfigId</a></code> | <code>string</code> | A unique id for the deployment config. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.deploymentId">DeploymentId</a></code> | <code>string</code> | A unique id for the deployment. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.fleetConfigs">FleetConfigs</a></code> | <code>object</code> | fleet_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.description">Description</a></code> | <code>string</code> | The description of the game server config. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_game_services_game_server_config#id GoogleGameServicesGameServerConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels associated with this game server config. Each label is a key-value pair. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.location">Location</a></code> | <code>string</code> | Location of the Deployment. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_game_services_game_server_config#project GoogleGameServicesGameServerConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.scalingConfigs">ScalingConfigs</a></code> | <code>object</code> | scaling_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeouts">GoogleGameServicesGameServerConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ConfigId`<sup>Required</sup> <a name="ConfigId" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.configId"></a>

```csharp
public string ConfigId { get; set; }
```

- *Type:* string

A unique id for the deployment config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_game_services_game_server_config#config_id GoogleGameServicesGameServerConfig#config_id}

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.deploymentId"></a>

```csharp
public string DeploymentId { get; set; }
```

- *Type:* string

A unique id for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_game_services_game_server_config#deployment_id GoogleGameServicesGameServerConfig#deployment_id}

---

##### `FleetConfigs`<sup>Required</sup> <a name="FleetConfigs" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.fleetConfigs"></a>

```csharp
public object FleetConfigs { get; set; }
```

- *Type:* object

fleet_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_game_services_game_server_config#fleet_configs GoogleGameServicesGameServerConfig#fleet_configs}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the game server config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_game_services_game_server_config#description GoogleGameServicesGameServerConfig#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_game_services_game_server_config#id GoogleGameServicesGameServerConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels associated with this game server config. Each label is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_game_services_game_server_config#labels GoogleGameServicesGameServerConfig#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Location of the Deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_game_services_game_server_config#location GoogleGameServicesGameServerConfig#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_game_services_game_server_config#project GoogleGameServicesGameServerConfig#project}.

---

##### `ScalingConfigs`<sup>Optional</sup> <a name="ScalingConfigs" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.scalingConfigs"></a>

```csharp
public object ScalingConfigs { get; set; }
```

- *Type:* object

scaling_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_game_services_game_server_config#scaling_configs GoogleGameServicesGameServerConfig#scaling_configs}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigConfig.property.timeouts"></a>

```csharp
public GoogleGameServicesGameServerConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeouts">GoogleGameServicesGameServerConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_game_services_game_server_config#timeouts GoogleGameServicesGameServerConfig#timeouts}

---

### GoogleGameServicesGameServerConfigFleetConfigs <a name="GoogleGameServicesGameServerConfigFleetConfigs" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGameServicesGameServerConfigFleetConfigs {
    string FleetSpec,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigs.property.fleetSpec">FleetSpec</a></code> | <code>string</code> | The fleet spec, which is sent to Agones to configure fleet. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigs.property.name">Name</a></code> | <code>string</code> | The name of the FleetConfig. |

---

##### `FleetSpec`<sup>Required</sup> <a name="FleetSpec" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigs.property.fleetSpec"></a>

```csharp
public string FleetSpec { get; set; }
```

- *Type:* string

The fleet spec, which is sent to Agones to configure fleet.

The spec can be passed as inline json but it is recommended to use a file reference
instead. File references can contain the json or yaml format of the fleet spec. Eg:

fleet_spec = jsonencode(yamldecode(file("fleet_configs.yaml")))
fleet_spec = file("fleet_configs.json")

The format of the spec can be found :
'https://agones.dev/site/docs/reference/fleet/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_game_services_game_server_config#fleet_spec GoogleGameServicesGameServerConfig#fleet_spec}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigs.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the FleetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_game_services_game_server_config#name GoogleGameServicesGameServerConfig#name}

---

### GoogleGameServicesGameServerConfigScalingConfigs <a name="GoogleGameServicesGameServerConfigScalingConfigs" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGameServicesGameServerConfigScalingConfigs {
    string FleetAutoscalerSpec,
    string Name,
    object Schedules = null,
    object Selectors = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigs.property.fleetAutoscalerSpec">FleetAutoscalerSpec</a></code> | <code>string</code> | Fleet autoscaler spec, which is sent to Agones. Example spec can be found : https://agones.dev/site/docs/reference/fleetautoscaler/. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigs.property.name">Name</a></code> | <code>string</code> | The name of the ScalingConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigs.property.schedules">Schedules</a></code> | <code>object</code> | schedules block. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigs.property.selectors">Selectors</a></code> | <code>object</code> | selectors block. |

---

##### `FleetAutoscalerSpec`<sup>Required</sup> <a name="FleetAutoscalerSpec" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigs.property.fleetAutoscalerSpec"></a>

```csharp
public string FleetAutoscalerSpec { get; set; }
```

- *Type:* string

Fleet autoscaler spec, which is sent to Agones. Example spec can be found : https://agones.dev/site/docs/reference/fleetautoscaler/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_game_services_game_server_config#fleet_autoscaler_spec GoogleGameServicesGameServerConfig#fleet_autoscaler_spec}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigs.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the ScalingConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_game_services_game_server_config#name GoogleGameServicesGameServerConfig#name}

---

##### `Schedules`<sup>Optional</sup> <a name="Schedules" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigs.property.schedules"></a>

```csharp
public object Schedules { get; set; }
```

- *Type:* object

schedules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_game_services_game_server_config#schedules GoogleGameServicesGameServerConfig#schedules}

---

##### `Selectors`<sup>Optional</sup> <a name="Selectors" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigs.property.selectors"></a>

```csharp
public object Selectors { get; set; }
```

- *Type:* object

selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_game_services_game_server_config#selectors GoogleGameServicesGameServerConfig#selectors}

---

### GoogleGameServicesGameServerConfigScalingConfigsSchedules <a name="GoogleGameServicesGameServerConfigScalingConfigsSchedules" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGameServicesGameServerConfigScalingConfigsSchedules {
    string CronJobDuration = null,
    string CronSpec = null,
    string EndTime = null,
    string StartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedules.property.cronJobDuration">CronJobDuration</a></code> | <code>string</code> | The duration for the cron job event. The duration of the event is effective after the cron job's start time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedules.property.cronSpec">CronSpec</a></code> | <code>string</code> | The cron definition of the scheduled event. See https://en.wikipedia.org/wiki/Cron. Cron spec specifies the local time as defined by the realm. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedules.property.endTime">EndTime</a></code> | <code>string</code> | The end time of the event. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedules.property.startTime">StartTime</a></code> | <code>string</code> | The start time of the event. |

---

##### `CronJobDuration`<sup>Optional</sup> <a name="CronJobDuration" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedules.property.cronJobDuration"></a>

```csharp
public string CronJobDuration { get; set; }
```

- *Type:* string

The duration for the cron job event. The duration of the event is effective after the cron job's start time.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_game_services_game_server_config#cron_job_duration GoogleGameServicesGameServerConfig#cron_job_duration}

---

##### `CronSpec`<sup>Optional</sup> <a name="CronSpec" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedules.property.cronSpec"></a>

```csharp
public string CronSpec { get; set; }
```

- *Type:* string

The cron definition of the scheduled event. See https://en.wikipedia.org/wiki/Cron. Cron spec specifies the local time as defined by the realm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_game_services_game_server_config#cron_spec GoogleGameServicesGameServerConfig#cron_spec}

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedules.property.endTime"></a>

```csharp
public string EndTime { get; set; }
```

- *Type:* string

The end time of the event.

A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_game_services_game_server_config#end_time GoogleGameServicesGameServerConfig#end_time}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedules.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

The start time of the event.

A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_game_services_game_server_config#start_time GoogleGameServicesGameServerConfig#start_time}

---

### GoogleGameServicesGameServerConfigScalingConfigsSelectors <a name="GoogleGameServicesGameServerConfigScalingConfigsSelectors" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGameServicesGameServerConfigScalingConfigsSelectors {
    System.Collections.Generic.IDictionary<string, string> Labels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectors.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Set of labels to group by. |

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectors.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Set of labels to group by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_game_services_game_server_config#labels GoogleGameServicesGameServerConfig#labels}

---

### GoogleGameServicesGameServerConfigTimeouts <a name="GoogleGameServicesGameServerConfigTimeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGameServicesGameServerConfigTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_game_services_game_server_config#create GoogleGameServicesGameServerConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_game_services_game_server_config#delete GoogleGameServicesGameServerConfig#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_game_services_game_server_config#create GoogleGameServicesGameServerConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_game_services_game_server_config#delete GoogleGameServicesGameServerConfig#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGameServicesGameServerConfigFleetConfigsList <a name="GoogleGameServicesGameServerConfigFleetConfigsList" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGameServicesGameServerConfigFleetConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.get"></a>

```csharp
private GoogleGameServicesGameServerConfigFleetConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleGameServicesGameServerConfigFleetConfigsOutputReference <a name="GoogleGameServicesGameServerConfigFleetConfigsOutputReference" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGameServicesGameServerConfigFleetConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.property.fleetSpecInput">FleetSpecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.property.fleetSpec">FleetSpec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FleetSpecInput`<sup>Optional</sup> <a name="FleetSpecInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.property.fleetSpecInput"></a>

```csharp
public string FleetSpecInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `FleetSpec`<sup>Required</sup> <a name="FleetSpec" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.property.fleetSpec"></a>

```csharp
public string FleetSpec { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigFleetConfigsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleGameServicesGameServerConfigScalingConfigsList <a name="GoogleGameServicesGameServerConfigScalingConfigsList" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGameServicesGameServerConfigScalingConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.get"></a>

```csharp
private GoogleGameServicesGameServerConfigScalingConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleGameServicesGameServerConfigScalingConfigsOutputReference <a name="GoogleGameServicesGameServerConfigScalingConfigsOutputReference" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGameServicesGameServerConfigScalingConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.putSchedules">PutSchedules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.putSelectors">PutSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.resetSchedules">ResetSchedules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.resetSelectors">ResetSelectors</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSchedules` <a name="PutSchedules" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.putSchedules"></a>

```csharp
private void PutSchedules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.putSchedules.parameter.value"></a>

- *Type:* object

---

##### `PutSelectors` <a name="PutSelectors" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.putSelectors"></a>

```csharp
private void PutSelectors(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.putSelectors.parameter.value"></a>

- *Type:* object

---

##### `ResetSchedules` <a name="ResetSchedules" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.resetSchedules"></a>

```csharp
private void ResetSchedules()
```

##### `ResetSelectors` <a name="ResetSelectors" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.resetSelectors"></a>

```csharp
private void ResetSelectors()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.schedules">Schedules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList">GoogleGameServicesGameServerConfigScalingConfigsSchedulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.selectors">Selectors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList">GoogleGameServicesGameServerConfigScalingConfigsSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.fleetAutoscalerSpecInput">FleetAutoscalerSpecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.schedulesInput">SchedulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.selectorsInput">SelectorsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.fleetAutoscalerSpec">FleetAutoscalerSpec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Schedules`<sup>Required</sup> <a name="Schedules" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.schedules"></a>

```csharp
public GoogleGameServicesGameServerConfigScalingConfigsSchedulesList Schedules { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList">GoogleGameServicesGameServerConfigScalingConfigsSchedulesList</a>

---

##### `Selectors`<sup>Required</sup> <a name="Selectors" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.selectors"></a>

```csharp
public GoogleGameServicesGameServerConfigScalingConfigsSelectorsList Selectors { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList">GoogleGameServicesGameServerConfigScalingConfigsSelectorsList</a>

---

##### `FleetAutoscalerSpecInput`<sup>Optional</sup> <a name="FleetAutoscalerSpecInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.fleetAutoscalerSpecInput"></a>

```csharp
public string FleetAutoscalerSpecInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SchedulesInput`<sup>Optional</sup> <a name="SchedulesInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.schedulesInput"></a>

```csharp
public object SchedulesInput { get; }
```

- *Type:* object

---

##### `SelectorsInput`<sup>Optional</sup> <a name="SelectorsInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.selectorsInput"></a>

```csharp
public object SelectorsInput { get; }
```

- *Type:* object

---

##### `FleetAutoscalerSpec`<sup>Required</sup> <a name="FleetAutoscalerSpec" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.fleetAutoscalerSpec"></a>

```csharp
public string FleetAutoscalerSpec { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleGameServicesGameServerConfigScalingConfigsSchedulesList <a name="GoogleGameServicesGameServerConfigScalingConfigsSchedulesList" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGameServicesGameServerConfigScalingConfigsSchedulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.get"></a>

```csharp
private GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference <a name="GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetCronJobDuration">ResetCronJobDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetCronSpec">ResetCronSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCronJobDuration` <a name="ResetCronJobDuration" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetCronJobDuration"></a>

```csharp
private void ResetCronJobDuration()
```

##### `ResetCronSpec` <a name="ResetCronSpec" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetCronSpec"></a>

```csharp
private void ResetCronSpec()
```

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetEndTime"></a>

```csharp
private void ResetEndTime()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetStartTime"></a>

```csharp
private void ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronJobDurationInput">CronJobDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronSpecInput">CronSpecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronJobDuration">CronJobDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronSpec">CronSpec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CronJobDurationInput`<sup>Optional</sup> <a name="CronJobDurationInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronJobDurationInput"></a>

```csharp
public string CronJobDurationInput { get; }
```

- *Type:* string

---

##### `CronSpecInput`<sup>Optional</sup> <a name="CronSpecInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronSpecInput"></a>

```csharp
public string CronSpecInput { get; }
```

- *Type:* string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.endTimeInput"></a>

```csharp
public string EndTimeInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `CronJobDuration`<sup>Required</sup> <a name="CronJobDuration" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronJobDuration"></a>

```csharp
public string CronJobDuration { get; }
```

- *Type:* string

---

##### `CronSpec`<sup>Required</sup> <a name="CronSpec" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronSpec"></a>

```csharp
public string CronSpec { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleGameServicesGameServerConfigScalingConfigsSelectorsList <a name="GoogleGameServicesGameServerConfigScalingConfigsSelectorsList" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGameServicesGameServerConfigScalingConfigsSelectorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.get"></a>

```csharp
private GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference <a name="GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleGameServicesGameServerConfigTimeoutsOutputReference <a name="GoogleGameServicesGameServerConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGameServicesGameServerConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGameServicesGameServerConfig.GoogleGameServicesGameServerConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



