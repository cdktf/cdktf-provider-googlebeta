# `google_container_node_pool`

Refer to the Terraform Registory for docs: [`google_container_node_pool`](https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool).

# `googleContainerNodePool` Submodule <a name="`googleContainerNodePool` Submodule" id="@cdktf/provider-google-beta.googleContainerNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContainerNodePool <a name="GoogleContainerNodePool" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool google_container_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePool(Construct Scope, string Id, GoogleContainerNodePoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig">GoogleContainerNodePoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig">GoogleContainerNodePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putAutoscaling">PutAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putManagement">PutManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNetworkConfig">PutNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNodeConfig">PutNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putPlacementPolicy">PutPlacementPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putUpgradeSettings">PutUpgradeSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetAutoscaling">ResetAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetInitialNodeCount">ResetInitialNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetManagement">ResetManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetMaxPodsPerNode">ResetMaxPodsPerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetNetworkConfig">ResetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetNodeConfig">ResetNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetNodeCount">ResetNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetNodeLocations">ResetNodeLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetPlacementPolicy">ResetPlacementPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetUpgradeSettings">ResetUpgradeSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAutoscaling` <a name="PutAutoscaling" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putAutoscaling"></a>

```csharp
private void PutAutoscaling(GoogleContainerNodePoolAutoscaling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putAutoscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscaling">GoogleContainerNodePoolAutoscaling</a>

---

##### `PutManagement` <a name="PutManagement" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putManagement"></a>

```csharp
private void PutManagement(GoogleContainerNodePoolManagement Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putManagement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagement">GoogleContainerNodePoolManagement</a>

---

##### `PutNetworkConfig` <a name="PutNetworkConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNetworkConfig"></a>

```csharp
private void PutNetworkConfig(GoogleContainerNodePoolNetworkConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfig">GoogleContainerNodePoolNetworkConfig</a>

---

##### `PutNodeConfig` <a name="PutNodeConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNodeConfig"></a>

```csharp
private void PutNodeConfig(GoogleContainerNodePoolNodeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNodeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig">GoogleContainerNodePoolNodeConfig</a>

---

##### `PutPlacementPolicy` <a name="PutPlacementPolicy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putPlacementPolicy"></a>

```csharp
private void PutPlacementPolicy(GoogleContainerNodePoolPlacementPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putPlacementPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicy">GoogleContainerNodePoolPlacementPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleContainerNodePoolTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeouts">GoogleContainerNodePoolTimeouts</a>

---

##### `PutUpgradeSettings` <a name="PutUpgradeSettings" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putUpgradeSettings"></a>

```csharp
private void PutUpgradeSettings(GoogleContainerNodePoolUpgradeSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putUpgradeSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettings">GoogleContainerNodePoolUpgradeSettings</a>

---

##### `ResetAutoscaling` <a name="ResetAutoscaling" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetAutoscaling"></a>

```csharp
private void ResetAutoscaling()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInitialNodeCount` <a name="ResetInitialNodeCount" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetInitialNodeCount"></a>

```csharp
private void ResetInitialNodeCount()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetManagement` <a name="ResetManagement" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetManagement"></a>

```csharp
private void ResetManagement()
```

##### `ResetMaxPodsPerNode` <a name="ResetMaxPodsPerNode" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetMaxPodsPerNode"></a>

```csharp
private void ResetMaxPodsPerNode()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetNamePrefix"></a>

```csharp
private void ResetNamePrefix()
```

##### `ResetNetworkConfig` <a name="ResetNetworkConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetNetworkConfig"></a>

```csharp
private void ResetNetworkConfig()
```

##### `ResetNodeConfig` <a name="ResetNodeConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetNodeConfig"></a>

```csharp
private void ResetNodeConfig()
```

##### `ResetNodeCount` <a name="ResetNodeCount" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetNodeCount"></a>

```csharp
private void ResetNodeCount()
```

##### `ResetNodeLocations` <a name="ResetNodeLocations" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetNodeLocations"></a>

```csharp
private void ResetNodeLocations()
```

##### `ResetPlacementPolicy` <a name="ResetPlacementPolicy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetPlacementPolicy"></a>

```csharp
private void ResetPlacementPolicy()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUpgradeSettings` <a name="ResetUpgradeSettings" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetUpgradeSettings"></a>

```csharp
private void ResetUpgradeSettings()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetVersion"></a>

```csharp
private void ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleContainerNodePool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleContainerNodePool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleContainerNodePool.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.autoscaling">Autoscaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference">GoogleContainerNodePoolAutoscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.instanceGroupUrls">InstanceGroupUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.managedInstanceGroupUrls">ManagedInstanceGroupUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.management">Management</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference">GoogleContainerNodePoolManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference">GoogleContainerNodePoolNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.nodeConfig">NodeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference">GoogleContainerNodePoolNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.operation">Operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.placementPolicy">PlacementPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference">GoogleContainerNodePoolPlacementPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference">GoogleContainerNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.upgradeSettings">UpgradeSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference">GoogleContainerNodePoolUpgradeSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.autoscalingInput">AutoscalingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscaling">GoogleContainerNodePoolAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.clusterInput">ClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.initialNodeCountInput">InitialNodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.managementInput">ManagementInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagement">GoogleContainerNodePoolManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.maxPodsPerNodeInput">MaxPodsPerNodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.namePrefixInput">NamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.networkConfigInput">NetworkConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfig">GoogleContainerNodePoolNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.nodeConfigInput">NodeConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig">GoogleContainerNodePoolNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.nodeCountInput">NodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.nodeLocationsInput">NodeLocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.placementPolicyInput">PlacementPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicy">GoogleContainerNodePoolPlacementPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.upgradeSettingsInput">UpgradeSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettings">GoogleContainerNodePoolUpgradeSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.cluster">Cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.initialNodeCount">InitialNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.maxPodsPerNode">MaxPodsPerNode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.namePrefix">NamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.nodeCount">NodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.nodeLocations">NodeLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Autoscaling`<sup>Required</sup> <a name="Autoscaling" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.autoscaling"></a>

```csharp
public GoogleContainerNodePoolAutoscalingOutputReference Autoscaling { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference">GoogleContainerNodePoolAutoscalingOutputReference</a>

---

##### `InstanceGroupUrls`<sup>Required</sup> <a name="InstanceGroupUrls" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.instanceGroupUrls"></a>

```csharp
public string[] InstanceGroupUrls { get; }
```

- *Type:* string[]

---

##### `ManagedInstanceGroupUrls`<sup>Required</sup> <a name="ManagedInstanceGroupUrls" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.managedInstanceGroupUrls"></a>

```csharp
public string[] ManagedInstanceGroupUrls { get; }
```

- *Type:* string[]

---

##### `Management`<sup>Required</sup> <a name="Management" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.management"></a>

```csharp
public GoogleContainerNodePoolManagementOutputReference Management { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference">GoogleContainerNodePoolManagementOutputReference</a>

---

##### `NetworkConfig`<sup>Required</sup> <a name="NetworkConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.networkConfig"></a>

```csharp
public GoogleContainerNodePoolNetworkConfigOutputReference NetworkConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference">GoogleContainerNodePoolNetworkConfigOutputReference</a>

---

##### `NodeConfig`<sup>Required</sup> <a name="NodeConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.nodeConfig"></a>

```csharp
public GoogleContainerNodePoolNodeConfigOutputReference NodeConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference">GoogleContainerNodePoolNodeConfigOutputReference</a>

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.operation"></a>

```csharp
public string Operation { get; }
```

- *Type:* string

---

##### `PlacementPolicy`<sup>Required</sup> <a name="PlacementPolicy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.placementPolicy"></a>

```csharp
public GoogleContainerNodePoolPlacementPolicyOutputReference PlacementPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference">GoogleContainerNodePoolPlacementPolicyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.timeouts"></a>

```csharp
public GoogleContainerNodePoolTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference">GoogleContainerNodePoolTimeoutsOutputReference</a>

---

##### `UpgradeSettings`<sup>Required</sup> <a name="UpgradeSettings" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.upgradeSettings"></a>

```csharp
public GoogleContainerNodePoolUpgradeSettingsOutputReference UpgradeSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference">GoogleContainerNodePoolUpgradeSettingsOutputReference</a>

---

##### `AutoscalingInput`<sup>Optional</sup> <a name="AutoscalingInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.autoscalingInput"></a>

```csharp
public GoogleContainerNodePoolAutoscaling AutoscalingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscaling">GoogleContainerNodePoolAutoscaling</a>

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.clusterInput"></a>

```csharp
public string ClusterInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InitialNodeCountInput`<sup>Optional</sup> <a name="InitialNodeCountInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.initialNodeCountInput"></a>

```csharp
public double InitialNodeCountInput { get; }
```

- *Type:* double

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ManagementInput`<sup>Optional</sup> <a name="ManagementInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.managementInput"></a>

```csharp
public GoogleContainerNodePoolManagement ManagementInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagement">GoogleContainerNodePoolManagement</a>

---

##### `MaxPodsPerNodeInput`<sup>Optional</sup> <a name="MaxPodsPerNodeInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.maxPodsPerNodeInput"></a>

```csharp
public double MaxPodsPerNodeInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.namePrefixInput"></a>

```csharp
public string NamePrefixInput { get; }
```

- *Type:* string

---

##### `NetworkConfigInput`<sup>Optional</sup> <a name="NetworkConfigInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.networkConfigInput"></a>

```csharp
public GoogleContainerNodePoolNetworkConfig NetworkConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfig">GoogleContainerNodePoolNetworkConfig</a>

---

##### `NodeConfigInput`<sup>Optional</sup> <a name="NodeConfigInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.nodeConfigInput"></a>

```csharp
public GoogleContainerNodePoolNodeConfig NodeConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig">GoogleContainerNodePoolNodeConfig</a>

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.nodeCountInput"></a>

```csharp
public double NodeCountInput { get; }
```

- *Type:* double

---

##### `NodeLocationsInput`<sup>Optional</sup> <a name="NodeLocationsInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.nodeLocationsInput"></a>

```csharp
public string[] NodeLocationsInput { get; }
```

- *Type:* string[]

---

##### `PlacementPolicyInput`<sup>Optional</sup> <a name="PlacementPolicyInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.placementPolicyInput"></a>

```csharp
public GoogleContainerNodePoolPlacementPolicy PlacementPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicy">GoogleContainerNodePoolPlacementPolicy</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UpgradeSettingsInput`<sup>Optional</sup> <a name="UpgradeSettingsInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.upgradeSettingsInput"></a>

```csharp
public GoogleContainerNodePoolUpgradeSettings UpgradeSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettings">GoogleContainerNodePoolUpgradeSettings</a>

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.cluster"></a>

```csharp
public string Cluster { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InitialNodeCount`<sup>Required</sup> <a name="InitialNodeCount" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.initialNodeCount"></a>

```csharp
public double InitialNodeCount { get; }
```

- *Type:* double

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MaxPodsPerNode`<sup>Required</sup> <a name="MaxPodsPerNode" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.maxPodsPerNode"></a>

```csharp
public double MaxPodsPerNode { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.namePrefix"></a>

```csharp
public string NamePrefix { get; }
```

- *Type:* string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.nodeCount"></a>

```csharp
public double NodeCount { get; }
```

- *Type:* double

---

##### `NodeLocations`<sup>Required</sup> <a name="NodeLocations" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.nodeLocations"></a>

```csharp
public string[] NodeLocations { get; }
```

- *Type:* string[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContainerNodePoolAutoscaling <a name="GoogleContainerNodePoolAutoscaling" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscaling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolAutoscaling {
    string LocationPolicy = null,
    double MaxNodeCount = null,
    double MinNodeCount = null,
    double TotalMaxNodeCount = null,
    double TotalMinNodeCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscaling.property.locationPolicy">LocationPolicy</a></code> | <code>string</code> | Location policy specifies the algorithm used when scaling-up the node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscaling.property.maxNodeCount">MaxNodeCount</a></code> | <code>double</code> | Maximum number of nodes per zone in the node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscaling.property.minNodeCount">MinNodeCount</a></code> | <code>double</code> | Minimum number of nodes per zone in the node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscaling.property.totalMaxNodeCount">TotalMaxNodeCount</a></code> | <code>double</code> | Maximum number of all nodes in the node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscaling.property.totalMinNodeCount">TotalMinNodeCount</a></code> | <code>double</code> | Minimum number of all nodes in the node pool. |

---

##### `LocationPolicy`<sup>Optional</sup> <a name="LocationPolicy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscaling.property.locationPolicy"></a>

```csharp
public string LocationPolicy { get; set; }
```

- *Type:* string

Location policy specifies the algorithm used when scaling-up the node pool.

"BALANCED" - Is a best effort policy that aims to balance the sizes of available zones. "ANY" - Instructs the cluster autoscaler to prioritize utilization of unused reservations, and reduces preemption risk for Spot VMs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#location_policy GoogleContainerNodePool#location_policy}

---

##### `MaxNodeCount`<sup>Optional</sup> <a name="MaxNodeCount" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscaling.property.maxNodeCount"></a>

```csharp
public double MaxNodeCount { get; set; }
```

- *Type:* double

Maximum number of nodes per zone in the node pool.

Must be >= min_node_count. Cannot be used with total limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#max_node_count GoogleContainerNodePool#max_node_count}

---

##### `MinNodeCount`<sup>Optional</sup> <a name="MinNodeCount" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscaling.property.minNodeCount"></a>

```csharp
public double MinNodeCount { get; set; }
```

- *Type:* double

Minimum number of nodes per zone in the node pool.

Must be >=0 and <= max_node_count. Cannot be used with total limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#min_node_count GoogleContainerNodePool#min_node_count}

---

##### `TotalMaxNodeCount`<sup>Optional</sup> <a name="TotalMaxNodeCount" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscaling.property.totalMaxNodeCount"></a>

```csharp
public double TotalMaxNodeCount { get; set; }
```

- *Type:* double

Maximum number of all nodes in the node pool.

Must be >= total_min_node_count. Cannot be used with per zone limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#total_max_node_count GoogleContainerNodePool#total_max_node_count}

---

##### `TotalMinNodeCount`<sup>Optional</sup> <a name="TotalMinNodeCount" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscaling.property.totalMinNodeCount"></a>

```csharp
public double TotalMinNodeCount { get; set; }
```

- *Type:* double

Minimum number of all nodes in the node pool.

Must be >=0 and <= total_max_node_count. Cannot be used with per zone limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#total_min_node_count GoogleContainerNodePool#total_min_node_count}

---

### GoogleContainerNodePoolConfig <a name="GoogleContainerNodePoolConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Cluster,
    GoogleContainerNodePoolAutoscaling Autoscaling = null,
    string Id = null,
    double InitialNodeCount = null,
    string Location = null,
    GoogleContainerNodePoolManagement Management = null,
    double MaxPodsPerNode = null,
    string Name = null,
    string NamePrefix = null,
    GoogleContainerNodePoolNetworkConfig NetworkConfig = null,
    GoogleContainerNodePoolNodeConfig NodeConfig = null,
    double NodeCount = null,
    string[] NodeLocations = null,
    GoogleContainerNodePoolPlacementPolicy PlacementPolicy = null,
    string Project = null,
    GoogleContainerNodePoolTimeouts Timeouts = null,
    GoogleContainerNodePoolUpgradeSettings UpgradeSettings = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.cluster">Cluster</a></code> | <code>string</code> | The cluster to create the node pool for. Cluster must be present in location provided for zonal clusters. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.autoscaling">Autoscaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscaling">GoogleContainerNodePoolAutoscaling</a></code> | autoscaling block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#id GoogleContainerNodePool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.initialNodeCount">InitialNodeCount</a></code> | <code>double</code> | The initial number of nodes for the pool. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.location">Location</a></code> | <code>string</code> | The location (region or zone) of the cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.management">Management</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagement">GoogleContainerNodePoolManagement</a></code> | management block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.maxPodsPerNode">MaxPodsPerNode</a></code> | <code>double</code> | The maximum number of pods per node in this node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.name">Name</a></code> | <code>string</code> | The name of the node pool. If left blank, Terraform will auto-generate a unique name. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.namePrefix">NamePrefix</a></code> | <code>string</code> | Creates a unique name for the node pool beginning with the specified prefix. Conflicts with name. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfig">GoogleContainerNodePoolNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.nodeConfig">NodeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig">GoogleContainerNodePoolNodeConfig</a></code> | node_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.nodeCount">NodeCount</a></code> | <code>double</code> | The number of nodes per instance group. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.nodeLocations">NodeLocations</a></code> | <code>string[]</code> | The list of zones in which the node pool's nodes should be located. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.placementPolicy">PlacementPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicy">GoogleContainerNodePoolPlacementPolicy</a></code> | placement_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.project">Project</a></code> | <code>string</code> | The ID of the project in which to create the node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeouts">GoogleContainerNodePoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.upgradeSettings">UpgradeSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettings">GoogleContainerNodePoolUpgradeSettings</a></code> | upgrade_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.version">Version</a></code> | <code>string</code> | The Kubernetes version for the nodes in this pool. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.cluster"></a>

```csharp
public string Cluster { get; set; }
```

- *Type:* string

The cluster to create the node pool for. Cluster must be present in location provided for zonal clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#cluster GoogleContainerNodePool#cluster}

---

##### `Autoscaling`<sup>Optional</sup> <a name="Autoscaling" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.autoscaling"></a>

```csharp
public GoogleContainerNodePoolAutoscaling Autoscaling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscaling">GoogleContainerNodePoolAutoscaling</a>

autoscaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#autoscaling GoogleContainerNodePool#autoscaling}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#id GoogleContainerNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InitialNodeCount`<sup>Optional</sup> <a name="InitialNodeCount" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.initialNodeCount"></a>

```csharp
public double InitialNodeCount { get; set; }
```

- *Type:* double

The initial number of nodes for the pool.

In regional or multi-zonal clusters, this is the number of nodes per zone. Changing this will force recreation of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#initial_node_count GoogleContainerNodePool#initial_node_count}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location (region or zone) of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#location GoogleContainerNodePool#location}

---

##### `Management`<sup>Optional</sup> <a name="Management" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.management"></a>

```csharp
public GoogleContainerNodePoolManagement Management { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagement">GoogleContainerNodePoolManagement</a>

management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#management GoogleContainerNodePool#management}

---

##### `MaxPodsPerNode`<sup>Optional</sup> <a name="MaxPodsPerNode" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.maxPodsPerNode"></a>

```csharp
public double MaxPodsPerNode { get; set; }
```

- *Type:* double

The maximum number of pods per node in this node pool.

Note that this does not work on node pools which are "route-based" - that is, node pools belonging to clusters that do not have IP Aliasing enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#max_pods_per_node GoogleContainerNodePool#max_pods_per_node}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the node pool. If left blank, Terraform will auto-generate a unique name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#name GoogleContainerNodePool#name}

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.namePrefix"></a>

```csharp
public string NamePrefix { get; set; }
```

- *Type:* string

Creates a unique name for the node pool beginning with the specified prefix. Conflicts with name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#name_prefix GoogleContainerNodePool#name_prefix}

---

##### `NetworkConfig`<sup>Optional</sup> <a name="NetworkConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.networkConfig"></a>

```csharp
public GoogleContainerNodePoolNetworkConfig NetworkConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfig">GoogleContainerNodePoolNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#network_config GoogleContainerNodePool#network_config}

---

##### `NodeConfig`<sup>Optional</sup> <a name="NodeConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.nodeConfig"></a>

```csharp
public GoogleContainerNodePoolNodeConfig NodeConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig">GoogleContainerNodePoolNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#node_config GoogleContainerNodePool#node_config}

---

##### `NodeCount`<sup>Optional</sup> <a name="NodeCount" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.nodeCount"></a>

```csharp
public double NodeCount { get; set; }
```

- *Type:* double

The number of nodes per instance group.

This field can be used to update the number of nodes per instance group but should not be used alongside autoscaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#node_count GoogleContainerNodePool#node_count}

---

##### `NodeLocations`<sup>Optional</sup> <a name="NodeLocations" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.nodeLocations"></a>

```csharp
public string[] NodeLocations { get; set; }
```

- *Type:* string[]

The list of zones in which the node pool's nodes should be located.

Nodes must be in the region of their regional cluster or in the same region as their cluster's zone for zonal clusters. If unspecified, the cluster-level node_locations will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#node_locations GoogleContainerNodePool#node_locations}

---

##### `PlacementPolicy`<sup>Optional</sup> <a name="PlacementPolicy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.placementPolicy"></a>

```csharp
public GoogleContainerNodePoolPlacementPolicy PlacementPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicy">GoogleContainerNodePoolPlacementPolicy</a>

placement_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#placement_policy GoogleContainerNodePool#placement_policy}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which to create the node pool.

If blank, the provider-configured project will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#project GoogleContainerNodePool#project}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.timeouts"></a>

```csharp
public GoogleContainerNodePoolTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeouts">GoogleContainerNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#timeouts GoogleContainerNodePool#timeouts}

---

##### `UpgradeSettings`<sup>Optional</sup> <a name="UpgradeSettings" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.upgradeSettings"></a>

```csharp
public GoogleContainerNodePoolUpgradeSettings UpgradeSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettings">GoogleContainerNodePoolUpgradeSettings</a>

upgrade_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#upgrade_settings GoogleContainerNodePool#upgrade_settings}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

The Kubernetes version for the nodes in this pool.

Note that if this field and auto_upgrade are both specified, they will fight each other for what the node version should be, so setting both is highly discouraged. While a fuzzy version can be specified, it's recommended that you specify explicit versions as Terraform will see spurious diffs when fuzzy versions are used. See the google_container_engine_versions data source's version_prefix field to approximate fuzzy versions in a Terraform-compatible way.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#version GoogleContainerNodePool#version}

---

### GoogleContainerNodePoolManagement <a name="GoogleContainerNodePoolManagement" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolManagement {
    object AutoRepair = null,
    object AutoUpgrade = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagement.property.autoRepair">AutoRepair</a></code> | <code>object</code> | Whether the nodes will be automatically repaired. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagement.property.autoUpgrade">AutoUpgrade</a></code> | <code>object</code> | Whether the nodes will be automatically upgraded. |

---

##### `AutoRepair`<sup>Optional</sup> <a name="AutoRepair" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagement.property.autoRepair"></a>

```csharp
public object AutoRepair { get; set; }
```

- *Type:* object

Whether the nodes will be automatically repaired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#auto_repair GoogleContainerNodePool#auto_repair}

---

##### `AutoUpgrade`<sup>Optional</sup> <a name="AutoUpgrade" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagement.property.autoUpgrade"></a>

```csharp
public object AutoUpgrade { get; set; }
```

- *Type:* object

Whether the nodes will be automatically upgraded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#auto_upgrade GoogleContainerNodePool#auto_upgrade}

---

### GoogleContainerNodePoolNetworkConfig <a name="GoogleContainerNodePoolNetworkConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolNetworkConfig {
    object CreatePodRange = null,
    object EnablePrivateNodes = null,
    GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig PodCidrOverprovisionConfig = null,
    string PodIpv4CidrBlock = null,
    string PodRange = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfig.property.createPodRange">CreatePodRange</a></code> | <code>object</code> | Whether to create a new range for pod IPs in this node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfig.property.enablePrivateNodes">EnablePrivateNodes</a></code> | <code>object</code> | Whether nodes have internal IP addresses only. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfig.property.podCidrOverprovisionConfig">PodCidrOverprovisionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig">GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig</a></code> | pod_cidr_overprovision_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfig.property.podIpv4CidrBlock">PodIpv4CidrBlock</a></code> | <code>string</code> | The IP address range for pod IPs in this node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfig.property.podRange">PodRange</a></code> | <code>string</code> | The ID of the secondary range for pod IPs. |

---

##### `CreatePodRange`<sup>Optional</sup> <a name="CreatePodRange" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfig.property.createPodRange"></a>

```csharp
public object CreatePodRange { get; set; }
```

- *Type:* object

Whether to create a new range for pod IPs in this node pool.

Defaults are provided for pod_range and pod_ipv4_cidr_block if they are not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#create_pod_range GoogleContainerNodePool#create_pod_range}

---

##### `EnablePrivateNodes`<sup>Optional</sup> <a name="EnablePrivateNodes" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfig.property.enablePrivateNodes"></a>

```csharp
public object EnablePrivateNodes { get; set; }
```

- *Type:* object

Whether nodes have internal IP addresses only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#enable_private_nodes GoogleContainerNodePool#enable_private_nodes}

---

##### `PodCidrOverprovisionConfig`<sup>Optional</sup> <a name="PodCidrOverprovisionConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfig.property.podCidrOverprovisionConfig"></a>

```csharp
public GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig PodCidrOverprovisionConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig">GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig</a>

pod_cidr_overprovision_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#pod_cidr_overprovision_config GoogleContainerNodePool#pod_cidr_overprovision_config}

---

##### `PodIpv4CidrBlock`<sup>Optional</sup> <a name="PodIpv4CidrBlock" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfig.property.podIpv4CidrBlock"></a>

```csharp
public string PodIpv4CidrBlock { get; set; }
```

- *Type:* string

The IP address range for pod IPs in this node pool.

Only applicable if create_pod_range is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) to pick a specific range to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#pod_ipv4_cidr_block GoogleContainerNodePool#pod_ipv4_cidr_block}

---

##### `PodRange`<sup>Optional</sup> <a name="PodRange" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfig.property.podRange"></a>

```csharp
public string PodRange { get; set; }
```

- *Type:* string

The ID of the secondary range for pod IPs.

If create_pod_range is true, this ID is used for the new range. If create_pod_range is false, uses an existing secondary range with this ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#pod_range GoogleContainerNodePool#pod_range}

---

### GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig <a name="GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig {
    object Disabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig.property.disabled">Disabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#disabled GoogleContainerNodePool#disabled}. |

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig.property.disabled"></a>

```csharp
public object Disabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#disabled GoogleContainerNodePool#disabled}.

---

### GoogleContainerNodePoolNodeConfig <a name="GoogleContainerNodePoolNodeConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolNodeConfig {
    GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures AdvancedMachineFeatures = null,
    string BootDiskKmsKey = null,
    double DiskSizeGb = null,
    string DiskType = null,
    GoogleContainerNodePoolNodeConfigEphemeralStorageConfig EphemeralStorageConfig = null,
    GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig EphemeralStorageLocalSsdConfig = null,
    GoogleContainerNodePoolNodeConfigGcfsConfig GcfsConfig = null,
    object GuestAccelerator = null,
    GoogleContainerNodePoolNodeConfigGvnic Gvnic = null,
    string ImageType = null,
    GoogleContainerNodePoolNodeConfigKubeletConfig KubeletConfig = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    GoogleContainerNodePoolNodeConfigLinuxNodeConfig LinuxNodeConfig = null,
    GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig LocalNvmeSsdBlockConfig = null,
    double LocalSsdCount = null,
    string LoggingVariant = null,
    string MachineType = null,
    System.Collections.Generic.IDictionary<string, string> Metadata = null,
    string MinCpuPlatform = null,
    string NodeGroup = null,
    string[] OauthScopes = null,
    object Preemptible = null,
    GoogleContainerNodePoolNodeConfigReservationAffinity ReservationAffinity = null,
    System.Collections.Generic.IDictionary<string, string> ResourceLabels = null,
    GoogleContainerNodePoolNodeConfigSandboxConfig SandboxConfig = null,
    string ServiceAccount = null,
    GoogleContainerNodePoolNodeConfigShieldedInstanceConfig ShieldedInstanceConfig = null,
    object Spot = null,
    string[] Tags = null,
    object Taint = null,
    GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig WorkloadMetadataConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.advancedMachineFeatures">AdvancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures">GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures</a></code> | advanced_machine_features block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.bootDiskKmsKey">BootDiskKmsKey</a></code> | <code>string</code> | The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.diskSizeGb">DiskSizeGb</a></code> | <code>double</code> | Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.diskType">DiskType</a></code> | <code>string</code> | Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.ephemeralStorageConfig">EphemeralStorageConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfig">GoogleContainerNodePoolNodeConfigEphemeralStorageConfig</a></code> | ephemeral_storage_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.ephemeralStorageLocalSsdConfig">EphemeralStorageLocalSsdConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig">GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig</a></code> | ephemeral_storage_local_ssd_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.gcfsConfig">GcfsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfig">GoogleContainerNodePoolNodeConfigGcfsConfig</a></code> | gcfs_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.guestAccelerator">GuestAccelerator</a></code> | <code>object</code> | List of the type and count of accelerator cards attached to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.gvnic">Gvnic</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnic">GoogleContainerNodePoolNodeConfigGvnic</a></code> | gvnic block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.imageType">ImageType</a></code> | <code>string</code> | The image type to use for this node. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.kubeletConfig">KubeletConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfig">GoogleContainerNodePoolNodeConfigKubeletConfig</a></code> | kubelet_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The map of Kubernetes labels (key/value pairs) to be applied to each node. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.linuxNodeConfig">LinuxNodeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfig">GoogleContainerNodePoolNodeConfigLinuxNodeConfig</a></code> | linux_node_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.localNvmeSsdBlockConfig">LocalNvmeSsdBlockConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig">GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig</a></code> | local_nvme_ssd_block_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.localSsdCount">LocalSsdCount</a></code> | <code>double</code> | The number of local SSD disks to be attached to the node. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.loggingVariant">LoggingVariant</a></code> | <code>string</code> | Type of logging agent that is used as the default value for node pools in the cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.machineType">MachineType</a></code> | <code>string</code> | The name of a Google Compute Engine machine type. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The metadata key/value pairs assigned to instances in the cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.minCpuPlatform">MinCpuPlatform</a></code> | <code>string</code> | Minimum CPU platform to be used by this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.nodeGroup">NodeGroup</a></code> | <code>string</code> | Setting this field will assign instances of this pool to run on the specified node group. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.oauthScopes">OauthScopes</a></code> | <code>string[]</code> | The set of Google API scopes to be made available on all of the node VMs. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.preemptible">Preemptible</a></code> | <code>object</code> | Whether the nodes are created as preemptible VM instances. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.reservationAffinity">ReservationAffinity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinity">GoogleContainerNodePoolNodeConfigReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.resourceLabels">ResourceLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The GCE resource labels (a map of key/value pairs) to be applied to the node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.sandboxConfig">SandboxConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfig">GoogleContainerNodePoolNodeConfigSandboxConfig</a></code> | sandbox_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | The Google Cloud Platform Service Account to be used by the node VMs. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.shieldedInstanceConfig">ShieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfig">GoogleContainerNodePoolNodeConfigShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.spot">Spot</a></code> | <code>object</code> | Whether the nodes are created as spot VM instances. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.tags">Tags</a></code> | <code>string[]</code> | The list of instance tags applied to all nodes. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.taint">Taint</a></code> | <code>object</code> | List of Kubernetes taints to be applied to each node. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.workloadMetadataConfig">WorkloadMetadataConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig">GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig</a></code> | workload_metadata_config block. |

---

##### `AdvancedMachineFeatures`<sup>Optional</sup> <a name="AdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.advancedMachineFeatures"></a>

```csharp
public GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures AdvancedMachineFeatures { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures">GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures</a>

advanced_machine_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#advanced_machine_features GoogleContainerNodePool#advanced_machine_features}

---

##### `BootDiskKmsKey`<sup>Optional</sup> <a name="BootDiskKmsKey" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.bootDiskKmsKey"></a>

```csharp
public string BootDiskKmsKey { get; set; }
```

- *Type:* string

The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#boot_disk_kms_key GoogleContainerNodePool#boot_disk_kms_key}

---

##### `DiskSizeGb`<sup>Optional</sup> <a name="DiskSizeGb" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.diskSizeGb"></a>

```csharp
public double DiskSizeGb { get; set; }
```

- *Type:* double

Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#disk_size_gb GoogleContainerNodePool#disk_size_gb}

---

##### `DiskType`<sup>Optional</sup> <a name="DiskType" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.diskType"></a>

```csharp
public string DiskType { get; set; }
```

- *Type:* string

Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#disk_type GoogleContainerNodePool#disk_type}

---

##### `EphemeralStorageConfig`<sup>Optional</sup> <a name="EphemeralStorageConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.ephemeralStorageConfig"></a>

```csharp
public GoogleContainerNodePoolNodeConfigEphemeralStorageConfig EphemeralStorageConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfig">GoogleContainerNodePoolNodeConfigEphemeralStorageConfig</a>

ephemeral_storage_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#ephemeral_storage_config GoogleContainerNodePool#ephemeral_storage_config}

---

##### `EphemeralStorageLocalSsdConfig`<sup>Optional</sup> <a name="EphemeralStorageLocalSsdConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.ephemeralStorageLocalSsdConfig"></a>

```csharp
public GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig EphemeralStorageLocalSsdConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig">GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig</a>

ephemeral_storage_local_ssd_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#ephemeral_storage_local_ssd_config GoogleContainerNodePool#ephemeral_storage_local_ssd_config}

---

##### `GcfsConfig`<sup>Optional</sup> <a name="GcfsConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.gcfsConfig"></a>

```csharp
public GoogleContainerNodePoolNodeConfigGcfsConfig GcfsConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfig">GoogleContainerNodePoolNodeConfigGcfsConfig</a>

gcfs_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#gcfs_config GoogleContainerNodePool#gcfs_config}

---

##### `GuestAccelerator`<sup>Optional</sup> <a name="GuestAccelerator" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.guestAccelerator"></a>

```csharp
public object GuestAccelerator { get; set; }
```

- *Type:* object

List of the type and count of accelerator cards attached to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#guest_accelerator GoogleContainerNodePool#guest_accelerator}

---

##### `Gvnic`<sup>Optional</sup> <a name="Gvnic" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.gvnic"></a>

```csharp
public GoogleContainerNodePoolNodeConfigGvnic Gvnic { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnic">GoogleContainerNodePoolNodeConfigGvnic</a>

gvnic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#gvnic GoogleContainerNodePool#gvnic}

---

##### `ImageType`<sup>Optional</sup> <a name="ImageType" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.imageType"></a>

```csharp
public string ImageType { get; set; }
```

- *Type:* string

The image type to use for this node.

Note that for a given image type, the latest version of it will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#image_type GoogleContainerNodePool#image_type}

---

##### `KubeletConfig`<sup>Optional</sup> <a name="KubeletConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.kubeletConfig"></a>

```csharp
public GoogleContainerNodePoolNodeConfigKubeletConfig KubeletConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfig">GoogleContainerNodePoolNodeConfigKubeletConfig</a>

kubelet_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#kubelet_config GoogleContainerNodePool#kubelet_config}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The map of Kubernetes labels (key/value pairs) to be applied to each node.

These will added in addition to any default label(s) that Kubernetes may apply to the node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#labels GoogleContainerNodePool#labels}

---

##### `LinuxNodeConfig`<sup>Optional</sup> <a name="LinuxNodeConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.linuxNodeConfig"></a>

```csharp
public GoogleContainerNodePoolNodeConfigLinuxNodeConfig LinuxNodeConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfig">GoogleContainerNodePoolNodeConfigLinuxNodeConfig</a>

linux_node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#linux_node_config GoogleContainerNodePool#linux_node_config}

---

##### `LocalNvmeSsdBlockConfig`<sup>Optional</sup> <a name="LocalNvmeSsdBlockConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.localNvmeSsdBlockConfig"></a>

```csharp
public GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig LocalNvmeSsdBlockConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig">GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig</a>

local_nvme_ssd_block_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#local_nvme_ssd_block_config GoogleContainerNodePool#local_nvme_ssd_block_config}

---

##### `LocalSsdCount`<sup>Optional</sup> <a name="LocalSsdCount" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.localSsdCount"></a>

```csharp
public double LocalSsdCount { get; set; }
```

- *Type:* double

The number of local SSD disks to be attached to the node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#local_ssd_count GoogleContainerNodePool#local_ssd_count}

---

##### `LoggingVariant`<sup>Optional</sup> <a name="LoggingVariant" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.loggingVariant"></a>

```csharp
public string LoggingVariant { get; set; }
```

- *Type:* string

Type of logging agent that is used as the default value for node pools in the cluster.

Valid values include DEFAULT and MAX_THROUGHPUT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#logging_variant GoogleContainerNodePool#logging_variant}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.machineType"></a>

```csharp
public string MachineType { get; set; }
```

- *Type:* string

The name of a Google Compute Engine machine type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#machine_type GoogleContainerNodePool#machine_type}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The metadata key/value pairs assigned to instances in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#metadata GoogleContainerNodePool#metadata}

---

##### `MinCpuPlatform`<sup>Optional</sup> <a name="MinCpuPlatform" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.minCpuPlatform"></a>

```csharp
public string MinCpuPlatform { get; set; }
```

- *Type:* string

Minimum CPU platform to be used by this instance.

The instance may be scheduled on the specified or newer CPU platform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#min_cpu_platform GoogleContainerNodePool#min_cpu_platform}

---

##### `NodeGroup`<sup>Optional</sup> <a name="NodeGroup" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.nodeGroup"></a>

```csharp
public string NodeGroup { get; set; }
```

- *Type:* string

Setting this field will assign instances of this pool to run on the specified node group.

This is useful for running workloads on sole tenant nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#node_group GoogleContainerNodePool#node_group}

---

##### `OauthScopes`<sup>Optional</sup> <a name="OauthScopes" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.oauthScopes"></a>

```csharp
public string[] OauthScopes { get; set; }
```

- *Type:* string[]

The set of Google API scopes to be made available on all of the node VMs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#oauth_scopes GoogleContainerNodePool#oauth_scopes}

---

##### `Preemptible`<sup>Optional</sup> <a name="Preemptible" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.preemptible"></a>

```csharp
public object Preemptible { get; set; }
```

- *Type:* object

Whether the nodes are created as preemptible VM instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#preemptible GoogleContainerNodePool#preemptible}

---

##### `ReservationAffinity`<sup>Optional</sup> <a name="ReservationAffinity" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.reservationAffinity"></a>

```csharp
public GoogleContainerNodePoolNodeConfigReservationAffinity ReservationAffinity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinity">GoogleContainerNodePoolNodeConfigReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#reservation_affinity GoogleContainerNodePool#reservation_affinity}

---

##### `ResourceLabels`<sup>Optional</sup> <a name="ResourceLabels" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.resourceLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceLabels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The GCE resource labels (a map of key/value pairs) to be applied to the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#resource_labels GoogleContainerNodePool#resource_labels}

---

##### `SandboxConfig`<sup>Optional</sup> <a name="SandboxConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.sandboxConfig"></a>

```csharp
public GoogleContainerNodePoolNodeConfigSandboxConfig SandboxConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfig">GoogleContainerNodePoolNodeConfigSandboxConfig</a>

sandbox_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#sandbox_config GoogleContainerNodePool#sandbox_config}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

The Google Cloud Platform Service Account to be used by the node VMs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#service_account GoogleContainerNodePool#service_account}

---

##### `ShieldedInstanceConfig`<sup>Optional</sup> <a name="ShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.shieldedInstanceConfig"></a>

```csharp
public GoogleContainerNodePoolNodeConfigShieldedInstanceConfig ShieldedInstanceConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfig">GoogleContainerNodePoolNodeConfigShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#shielded_instance_config GoogleContainerNodePool#shielded_instance_config}

---

##### `Spot`<sup>Optional</sup> <a name="Spot" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.spot"></a>

```csharp
public object Spot { get; set; }
```

- *Type:* object

Whether the nodes are created as spot VM instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#spot GoogleContainerNodePool#spot}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

The list of instance tags applied to all nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#tags GoogleContainerNodePool#tags}

---

##### `Taint`<sup>Optional</sup> <a name="Taint" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.taint"></a>

```csharp
public object Taint { get; set; }
```

- *Type:* object

List of Kubernetes taints to be applied to each node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#taint GoogleContainerNodePool#taint}

---

##### `WorkloadMetadataConfig`<sup>Optional</sup> <a name="WorkloadMetadataConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.workloadMetadataConfig"></a>

```csharp
public GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig WorkloadMetadataConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig">GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig</a>

workload_metadata_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#workload_metadata_config GoogleContainerNodePool#workload_metadata_config}

---

### GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures <a name="GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures {
    double ThreadsPerCore
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures.property.threadsPerCore">ThreadsPerCore</a></code> | <code>double</code> | The number of threads per physical core. |

---

##### `ThreadsPerCore`<sup>Required</sup> <a name="ThreadsPerCore" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures.property.threadsPerCore"></a>

```csharp
public double ThreadsPerCore { get; set; }
```

- *Type:* double

The number of threads per physical core.

To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#threads_per_core GoogleContainerNodePool#threads_per_core}

---

### GoogleContainerNodePoolNodeConfigEphemeralStorageConfig <a name="GoogleContainerNodePoolNodeConfigEphemeralStorageConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolNodeConfigEphemeralStorageConfig {
    double LocalSsdCount
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfig.property.localSsdCount">LocalSsdCount</a></code> | <code>double</code> | Number of local SSDs to use to back ephemeral storage. |

---

##### `LocalSsdCount`<sup>Required</sup> <a name="LocalSsdCount" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfig.property.localSsdCount"></a>

```csharp
public double LocalSsdCount { get; set; }
```

- *Type:* double

Number of local SSDs to use to back ephemeral storage.

Uses NVMe interfaces. Each local SSD must be 375 or 3000 GB in size, and all local SSDs must share the same size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#local_ssd_count GoogleContainerNodePool#local_ssd_count}

---

### GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig <a name="GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig {
    double LocalSsdCount
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig.property.localSsdCount">LocalSsdCount</a></code> | <code>double</code> | Number of local SSDs to use to back ephemeral storage. |

---

##### `LocalSsdCount`<sup>Required</sup> <a name="LocalSsdCount" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig.property.localSsdCount"></a>

```csharp
public double LocalSsdCount { get; set; }
```

- *Type:* double

Number of local SSDs to use to back ephemeral storage.

Uses NVMe interfaces. Each local SSD must be 375 or 3000 GB in size, and all local SSDs must share the same size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#local_ssd_count GoogleContainerNodePool#local_ssd_count}

---

### GoogleContainerNodePoolNodeConfigGcfsConfig <a name="GoogleContainerNodePoolNodeConfigGcfsConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolNodeConfigGcfsConfig {
    object Enabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfig.property.enabled">Enabled</a></code> | <code>object</code> | Whether or not GCFS is enabled. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether or not GCFS is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#enabled GoogleContainerNodePool#enabled}

---

### GoogleContainerNodePoolNodeConfigGuestAccelerator <a name="GoogleContainerNodePoolNodeConfigGuestAccelerator" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAccelerator.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolNodeConfigGuestAccelerator {
    double Count = null,
    string GpuPartitionSize = null,
    object GpuSharingConfig = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAccelerator.property.count">Count</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#count GoogleContainerNodePool#count}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAccelerator.property.gpuPartitionSize">GpuPartitionSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#gpu_partition_size GoogleContainerNodePool#gpu_partition_size}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAccelerator.property.gpuSharingConfig">GpuSharingConfig</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#gpu_sharing_config GoogleContainerNodePool#gpu_sharing_config}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAccelerator.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#type GoogleContainerNodePool#type}. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAccelerator.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#count GoogleContainerNodePool#count}.

---

##### `GpuPartitionSize`<sup>Optional</sup> <a name="GpuPartitionSize" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAccelerator.property.gpuPartitionSize"></a>

```csharp
public string GpuPartitionSize { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#gpu_partition_size GoogleContainerNodePool#gpu_partition_size}.

---

##### `GpuSharingConfig`<sup>Optional</sup> <a name="GpuSharingConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAccelerator.property.gpuSharingConfig"></a>

```csharp
public object GpuSharingConfig { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#gpu_sharing_config GoogleContainerNodePool#gpu_sharing_config}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAccelerator.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#type GoogleContainerNodePool#type}.

---

### GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig <a name="GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig {
    string GpuSharingStrategy = null,
    double MaxSharedClientsPerGpu = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig.property.gpuSharingStrategy">GpuSharingStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#gpu_sharing_strategy GoogleContainerNodePool#gpu_sharing_strategy}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig.property.maxSharedClientsPerGpu">MaxSharedClientsPerGpu</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#max_shared_clients_per_gpu GoogleContainerNodePool#max_shared_clients_per_gpu}. |

---

##### `GpuSharingStrategy`<sup>Optional</sup> <a name="GpuSharingStrategy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig.property.gpuSharingStrategy"></a>

```csharp
public string GpuSharingStrategy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#gpu_sharing_strategy GoogleContainerNodePool#gpu_sharing_strategy}.

---

##### `MaxSharedClientsPerGpu`<sup>Optional</sup> <a name="MaxSharedClientsPerGpu" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig.property.maxSharedClientsPerGpu"></a>

```csharp
public double MaxSharedClientsPerGpu { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#max_shared_clients_per_gpu GoogleContainerNodePool#max_shared_clients_per_gpu}.

---

### GoogleContainerNodePoolNodeConfigGvnic <a name="GoogleContainerNodePoolNodeConfigGvnic" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnic.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolNodeConfigGvnic {
    object Enabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnic.property.enabled">Enabled</a></code> | <code>object</code> | Whether or not gvnic is enabled. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnic.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether or not gvnic is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#enabled GoogleContainerNodePool#enabled}

---

### GoogleContainerNodePoolNodeConfigKubeletConfig <a name="GoogleContainerNodePoolNodeConfigKubeletConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolNodeConfigKubeletConfig {
    string CpuManagerPolicy,
    object CpuCfsQuota = null,
    string CpuCfsQuotaPeriod = null,
    double PodPidsLimit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfig.property.cpuManagerPolicy">CpuManagerPolicy</a></code> | <code>string</code> | Control the CPU management policy on the node. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfig.property.cpuCfsQuota">CpuCfsQuota</a></code> | <code>object</code> | Enable CPU CFS quota enforcement for containers that specify CPU limits. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfig.property.cpuCfsQuotaPeriod">CpuCfsQuotaPeriod</a></code> | <code>string</code> | Set the CPU CFS quota period value 'cpu.cfs_period_us'. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfig.property.podPidsLimit">PodPidsLimit</a></code> | <code>double</code> | Controls the maximum number of processes allowed to run in a pod. |

---

##### `CpuManagerPolicy`<sup>Required</sup> <a name="CpuManagerPolicy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfig.property.cpuManagerPolicy"></a>

```csharp
public string CpuManagerPolicy { get; set; }
```

- *Type:* string

Control the CPU management policy on the node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#cpu_manager_policy GoogleContainerNodePool#cpu_manager_policy}

---

##### `CpuCfsQuota`<sup>Optional</sup> <a name="CpuCfsQuota" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfig.property.cpuCfsQuota"></a>

```csharp
public object CpuCfsQuota { get; set; }
```

- *Type:* object

Enable CPU CFS quota enforcement for containers that specify CPU limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#cpu_cfs_quota GoogleContainerNodePool#cpu_cfs_quota}

---

##### `CpuCfsQuotaPeriod`<sup>Optional</sup> <a name="CpuCfsQuotaPeriod" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfig.property.cpuCfsQuotaPeriod"></a>

```csharp
public string CpuCfsQuotaPeriod { get; set; }
```

- *Type:* string

Set the CPU CFS quota period value 'cpu.cfs_period_us'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#cpu_cfs_quota_period GoogleContainerNodePool#cpu_cfs_quota_period}

---

##### `PodPidsLimit`<sup>Optional</sup> <a name="PodPidsLimit" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfig.property.podPidsLimit"></a>

```csharp
public double PodPidsLimit { get; set; }
```

- *Type:* double

Controls the maximum number of processes allowed to run in a pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#pod_pids_limit GoogleContainerNodePool#pod_pids_limit}

---

### GoogleContainerNodePoolNodeConfigLinuxNodeConfig <a name="GoogleContainerNodePoolNodeConfigLinuxNodeConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolNodeConfigLinuxNodeConfig {
    System.Collections.Generic.IDictionary<string, string> Sysctls
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfig.property.sysctls">Sysctls</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The Linux kernel parameters to be applied to the nodes and all pods running on the nodes. |

---

##### `Sysctls`<sup>Required</sup> <a name="Sysctls" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfig.property.sysctls"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Sysctls { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The Linux kernel parameters to be applied to the nodes and all pods running on the nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#sysctls GoogleContainerNodePool#sysctls}

---

### GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig <a name="GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig {
    double LocalSsdCount
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig.property.localSsdCount">LocalSsdCount</a></code> | <code>double</code> | Number of raw-block local NVMe SSD disks to be attached to the node. |

---

##### `LocalSsdCount`<sup>Required</sup> <a name="LocalSsdCount" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig.property.localSsdCount"></a>

```csharp
public double LocalSsdCount { get; set; }
```

- *Type:* double

Number of raw-block local NVMe SSD disks to be attached to the node.

Each local SSD is 375 GB in size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#local_ssd_count GoogleContainerNodePool#local_ssd_count}

---

### GoogleContainerNodePoolNodeConfigReservationAffinity <a name="GoogleContainerNodePoolNodeConfigReservationAffinity" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolNodeConfigReservationAffinity {
    string ConsumeReservationType,
    string Key = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinity.property.consumeReservationType">ConsumeReservationType</a></code> | <code>string</code> | Corresponds to the type of reservation consumption. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinity.property.key">Key</a></code> | <code>string</code> | The label key of a reservation resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinity.property.values">Values</a></code> | <code>string[]</code> | The label values of the reservation resource. |

---

##### `ConsumeReservationType`<sup>Required</sup> <a name="ConsumeReservationType" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinity.property.consumeReservationType"></a>

```csharp
public string ConsumeReservationType { get; set; }
```

- *Type:* string

Corresponds to the type of reservation consumption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#consume_reservation_type GoogleContainerNodePool#consume_reservation_type}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinity.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The label key of a reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#key GoogleContainerNodePool#key}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinity.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

The label values of the reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#values GoogleContainerNodePool#values}

---

### GoogleContainerNodePoolNodeConfigSandboxConfig <a name="GoogleContainerNodePoolNodeConfigSandboxConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolNodeConfigSandboxConfig {
    string SandboxType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfig.property.sandboxType">SandboxType</a></code> | <code>string</code> | Type of the sandbox to use for the node (e.g. 'gvisor'). |

---

##### `SandboxType`<sup>Required</sup> <a name="SandboxType" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfig.property.sandboxType"></a>

```csharp
public string SandboxType { get; set; }
```

- *Type:* string

Type of the sandbox to use for the node (e.g. 'gvisor').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#sandbox_type GoogleContainerNodePool#sandbox_type}

---

### GoogleContainerNodePoolNodeConfigShieldedInstanceConfig <a name="GoogleContainerNodePoolNodeConfigShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolNodeConfigShieldedInstanceConfig {
    object EnableIntegrityMonitoring = null,
    object EnableSecureBoot = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfig.property.enableIntegrityMonitoring">EnableIntegrityMonitoring</a></code> | <code>object</code> | Defines whether the instance has integrity monitoring enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfig.property.enableSecureBoot">EnableSecureBoot</a></code> | <code>object</code> | Defines whether the instance has Secure Boot enabled. |

---

##### `EnableIntegrityMonitoring`<sup>Optional</sup> <a name="EnableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```csharp
public object EnableIntegrityMonitoring { get; set; }
```

- *Type:* object

Defines whether the instance has integrity monitoring enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#enable_integrity_monitoring GoogleContainerNodePool#enable_integrity_monitoring}

---

##### `EnableSecureBoot`<sup>Optional</sup> <a name="EnableSecureBoot" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfig.property.enableSecureBoot"></a>

```csharp
public object EnableSecureBoot { get; set; }
```

- *Type:* object

Defines whether the instance has Secure Boot enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#enable_secure_boot GoogleContainerNodePool#enable_secure_boot}

---

### GoogleContainerNodePoolNodeConfigTaint <a name="GoogleContainerNodePoolNodeConfigTaint" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolNodeConfigTaint {
    string Effect = null,
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaint.property.effect">Effect</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#effect GoogleContainerNodePool#effect}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaint.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#key GoogleContainerNodePool#key}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaint.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#value GoogleContainerNodePool#value}. |

---

##### `Effect`<sup>Optional</sup> <a name="Effect" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaint.property.effect"></a>

```csharp
public string Effect { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#effect GoogleContainerNodePool#effect}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaint.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#key GoogleContainerNodePool#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaint.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#value GoogleContainerNodePool#value}.

---

### GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig <a name="GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig {
    string Mode
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig.property.mode">Mode</a></code> | <code>string</code> | Mode is the configuration for how to expose metadata to workloads running on the node. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Mode is the configuration for how to expose metadata to workloads running on the node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#mode GoogleContainerNodePool#mode}

---

### GoogleContainerNodePoolPlacementPolicy <a name="GoogleContainerNodePoolPlacementPolicy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolPlacementPolicy {
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicy.property.type">Type</a></code> | <code>string</code> | Type defines the type of placement policy. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicy.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type defines the type of placement policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#type GoogleContainerNodePool#type}

---

### GoogleContainerNodePoolTimeouts <a name="GoogleContainerNodePoolTimeouts" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#create GoogleContainerNodePool#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#delete GoogleContainerNodePool#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#update GoogleContainerNodePool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#create GoogleContainerNodePool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#delete GoogleContainerNodePool#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#update GoogleContainerNodePool#update}.

---

### GoogleContainerNodePoolUpgradeSettings <a name="GoogleContainerNodePoolUpgradeSettings" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolUpgradeSettings {
    GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings BlueGreenSettings = null,
    double MaxSurge = null,
    double MaxUnavailable = null,
    string Strategy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettings.property.blueGreenSettings">BlueGreenSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings">GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings</a></code> | blue_green_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettings.property.maxSurge">MaxSurge</a></code> | <code>double</code> | The number of additional nodes that can be added to the node pool during an upgrade. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettings.property.maxUnavailable">MaxUnavailable</a></code> | <code>double</code> | The number of nodes that can be simultaneously unavailable during an upgrade. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettings.property.strategy">Strategy</a></code> | <code>string</code> | Update strategy for the given nodepool. |

---

##### `BlueGreenSettings`<sup>Optional</sup> <a name="BlueGreenSettings" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettings.property.blueGreenSettings"></a>

```csharp
public GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings BlueGreenSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings">GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings</a>

blue_green_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#blue_green_settings GoogleContainerNodePool#blue_green_settings}

---

##### `MaxSurge`<sup>Optional</sup> <a name="MaxSurge" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettings.property.maxSurge"></a>

```csharp
public double MaxSurge { get; set; }
```

- *Type:* double

The number of additional nodes that can be added to the node pool during an upgrade.

Increasing max_surge raises the number of nodes that can be upgraded simultaneously. Can be set to 0 or greater.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#max_surge GoogleContainerNodePool#max_surge}

---

##### `MaxUnavailable`<sup>Optional</sup> <a name="MaxUnavailable" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettings.property.maxUnavailable"></a>

```csharp
public double MaxUnavailable { get; set; }
```

- *Type:* double

The number of nodes that can be simultaneously unavailable during an upgrade.

Increasing max_unavailable raises the number of nodes that can be upgraded in parallel. Can be set to 0 or greater.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#max_unavailable GoogleContainerNodePool#max_unavailable}

---

##### `Strategy`<sup>Optional</sup> <a name="Strategy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettings.property.strategy"></a>

```csharp
public string Strategy { get; set; }
```

- *Type:* string

Update strategy for the given nodepool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#strategy GoogleContainerNodePool#strategy}

---

### GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings <a name="GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings {
    GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy StandardRolloutPolicy,
    string NodePoolSoakDuration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings.property.standardRolloutPolicy">StandardRolloutPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy">GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy</a></code> | standard_rollout_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings.property.nodePoolSoakDuration">NodePoolSoakDuration</a></code> | <code>string</code> | Time needed after draining entire blue pool. After this period, blue pool will be cleaned up. |

---

##### `StandardRolloutPolicy`<sup>Required</sup> <a name="StandardRolloutPolicy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings.property.standardRolloutPolicy"></a>

```csharp
public GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy StandardRolloutPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy">GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy</a>

standard_rollout_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#standard_rollout_policy GoogleContainerNodePool#standard_rollout_policy}

---

##### `NodePoolSoakDuration`<sup>Optional</sup> <a name="NodePoolSoakDuration" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings.property.nodePoolSoakDuration"></a>

```csharp
public string NodePoolSoakDuration { get; set; }
```

- *Type:* string

Time needed after draining entire blue pool. After this period, blue pool will be cleaned up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#node_pool_soak_duration GoogleContainerNodePool#node_pool_soak_duration}

---

### GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy <a name="GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy {
    double BatchNodeCount = null,
    double BatchPercentage = null,
    string BatchSoakDuration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy.property.batchNodeCount">BatchNodeCount</a></code> | <code>double</code> | Number of blue nodes to drain in a batch. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy.property.batchPercentage">BatchPercentage</a></code> | <code>double</code> | Percentage of the blue pool nodes to drain in a batch. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy.property.batchSoakDuration">BatchSoakDuration</a></code> | <code>string</code> | Soak time after each batch gets drained. |

---

##### `BatchNodeCount`<sup>Optional</sup> <a name="BatchNodeCount" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy.property.batchNodeCount"></a>

```csharp
public double BatchNodeCount { get; set; }
```

- *Type:* double

Number of blue nodes to drain in a batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#batch_node_count GoogleContainerNodePool#batch_node_count}

---

##### `BatchPercentage`<sup>Optional</sup> <a name="BatchPercentage" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy.property.batchPercentage"></a>

```csharp
public double BatchPercentage { get; set; }
```

- *Type:* double

Percentage of the blue pool nodes to drain in a batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#batch_percentage GoogleContainerNodePool#batch_percentage}

---

##### `BatchSoakDuration`<sup>Optional</sup> <a name="BatchSoakDuration" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy.property.batchSoakDuration"></a>

```csharp
public string BatchSoakDuration { get; set; }
```

- *Type:* string

Soak time after each batch gets drained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_container_node_pool#batch_soak_duration GoogleContainerNodePool#batch_soak_duration}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleContainerNodePoolAutoscalingOutputReference <a name="GoogleContainerNodePoolAutoscalingOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolAutoscalingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.resetLocationPolicy">ResetLocationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.resetMaxNodeCount">ResetMaxNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.resetMinNodeCount">ResetMinNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.resetTotalMaxNodeCount">ResetTotalMaxNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.resetTotalMinNodeCount">ResetTotalMinNodeCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLocationPolicy` <a name="ResetLocationPolicy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.resetLocationPolicy"></a>

```csharp
private void ResetLocationPolicy()
```

##### `ResetMaxNodeCount` <a name="ResetMaxNodeCount" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.resetMaxNodeCount"></a>

```csharp
private void ResetMaxNodeCount()
```

##### `ResetMinNodeCount` <a name="ResetMinNodeCount" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.resetMinNodeCount"></a>

```csharp
private void ResetMinNodeCount()
```

##### `ResetTotalMaxNodeCount` <a name="ResetTotalMaxNodeCount" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.resetTotalMaxNodeCount"></a>

```csharp
private void ResetTotalMaxNodeCount()
```

##### `ResetTotalMinNodeCount` <a name="ResetTotalMinNodeCount" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.resetTotalMinNodeCount"></a>

```csharp
private void ResetTotalMinNodeCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.locationPolicyInput">LocationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.maxNodeCountInput">MaxNodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.minNodeCountInput">MinNodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.totalMaxNodeCountInput">TotalMaxNodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.totalMinNodeCountInput">TotalMinNodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.locationPolicy">LocationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.maxNodeCount">MaxNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.minNodeCount">MinNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.totalMaxNodeCount">TotalMaxNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.totalMinNodeCount">TotalMinNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscaling">GoogleContainerNodePoolAutoscaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocationPolicyInput`<sup>Optional</sup> <a name="LocationPolicyInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.locationPolicyInput"></a>

```csharp
public string LocationPolicyInput { get; }
```

- *Type:* string

---

##### `MaxNodeCountInput`<sup>Optional</sup> <a name="MaxNodeCountInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.maxNodeCountInput"></a>

```csharp
public double MaxNodeCountInput { get; }
```

- *Type:* double

---

##### `MinNodeCountInput`<sup>Optional</sup> <a name="MinNodeCountInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.minNodeCountInput"></a>

```csharp
public double MinNodeCountInput { get; }
```

- *Type:* double

---

##### `TotalMaxNodeCountInput`<sup>Optional</sup> <a name="TotalMaxNodeCountInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.totalMaxNodeCountInput"></a>

```csharp
public double TotalMaxNodeCountInput { get; }
```

- *Type:* double

---

##### `TotalMinNodeCountInput`<sup>Optional</sup> <a name="TotalMinNodeCountInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.totalMinNodeCountInput"></a>

```csharp
public double TotalMinNodeCountInput { get; }
```

- *Type:* double

---

##### `LocationPolicy`<sup>Required</sup> <a name="LocationPolicy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.locationPolicy"></a>

```csharp
public string LocationPolicy { get; }
```

- *Type:* string

---

##### `MaxNodeCount`<sup>Required</sup> <a name="MaxNodeCount" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.maxNodeCount"></a>

```csharp
public double MaxNodeCount { get; }
```

- *Type:* double

---

##### `MinNodeCount`<sup>Required</sup> <a name="MinNodeCount" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.minNodeCount"></a>

```csharp
public double MinNodeCount { get; }
```

- *Type:* double

---

##### `TotalMaxNodeCount`<sup>Required</sup> <a name="TotalMaxNodeCount" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.totalMaxNodeCount"></a>

```csharp
public double TotalMaxNodeCount { get; }
```

- *Type:* double

---

##### `TotalMinNodeCount`<sup>Required</sup> <a name="TotalMinNodeCount" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.totalMinNodeCount"></a>

```csharp
public double TotalMinNodeCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerNodePoolAutoscaling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscaling">GoogleContainerNodePoolAutoscaling</a>

---


### GoogleContainerNodePoolManagementOutputReference <a name="GoogleContainerNodePoolManagementOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolManagementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.resetAutoRepair">ResetAutoRepair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.resetAutoUpgrade">ResetAutoUpgrade</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoRepair` <a name="ResetAutoRepair" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.resetAutoRepair"></a>

```csharp
private void ResetAutoRepair()
```

##### `ResetAutoUpgrade` <a name="ResetAutoUpgrade" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.resetAutoUpgrade"></a>

```csharp
private void ResetAutoUpgrade()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.property.autoRepairInput">AutoRepairInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.property.autoUpgradeInput">AutoUpgradeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.property.autoRepair">AutoRepair</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.property.autoUpgrade">AutoUpgrade</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagement">GoogleContainerNodePoolManagement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoRepairInput`<sup>Optional</sup> <a name="AutoRepairInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.property.autoRepairInput"></a>

```csharp
public object AutoRepairInput { get; }
```

- *Type:* object

---

##### `AutoUpgradeInput`<sup>Optional</sup> <a name="AutoUpgradeInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.property.autoUpgradeInput"></a>

```csharp
public object AutoUpgradeInput { get; }
```

- *Type:* object

---

##### `AutoRepair`<sup>Required</sup> <a name="AutoRepair" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.property.autoRepair"></a>

```csharp
public object AutoRepair { get; }
```

- *Type:* object

---

##### `AutoUpgrade`<sup>Required</sup> <a name="AutoUpgrade" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.property.autoUpgrade"></a>

```csharp
public object AutoUpgrade { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerNodePoolManagement InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagement">GoogleContainerNodePoolManagement</a>

---


### GoogleContainerNodePoolNetworkConfigOutputReference <a name="GoogleContainerNodePoolNetworkConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolNetworkConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.putPodCidrOverprovisionConfig">PutPodCidrOverprovisionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.resetCreatePodRange">ResetCreatePodRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.resetEnablePrivateNodes">ResetEnablePrivateNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.resetPodCidrOverprovisionConfig">ResetPodCidrOverprovisionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.resetPodIpv4CidrBlock">ResetPodIpv4CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.resetPodRange">ResetPodRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPodCidrOverprovisionConfig` <a name="PutPodCidrOverprovisionConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.putPodCidrOverprovisionConfig"></a>

```csharp
private void PutPodCidrOverprovisionConfig(GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.putPodCidrOverprovisionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig">GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig</a>

---

##### `ResetCreatePodRange` <a name="ResetCreatePodRange" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.resetCreatePodRange"></a>

```csharp
private void ResetCreatePodRange()
```

##### `ResetEnablePrivateNodes` <a name="ResetEnablePrivateNodes" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.resetEnablePrivateNodes"></a>

```csharp
private void ResetEnablePrivateNodes()
```

##### `ResetPodCidrOverprovisionConfig` <a name="ResetPodCidrOverprovisionConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.resetPodCidrOverprovisionConfig"></a>

```csharp
private void ResetPodCidrOverprovisionConfig()
```

##### `ResetPodIpv4CidrBlock` <a name="ResetPodIpv4CidrBlock" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.resetPodIpv4CidrBlock"></a>

```csharp
private void ResetPodIpv4CidrBlock()
```

##### `ResetPodRange` <a name="ResetPodRange" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.resetPodRange"></a>

```csharp
private void ResetPodRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.podCidrOverprovisionConfig">PodCidrOverprovisionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference">GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.createPodRangeInput">CreatePodRangeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.enablePrivateNodesInput">EnablePrivateNodesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.podCidrOverprovisionConfigInput">PodCidrOverprovisionConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig">GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.podIpv4CidrBlockInput">PodIpv4CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.podRangeInput">PodRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.createPodRange">CreatePodRange</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.enablePrivateNodes">EnablePrivateNodes</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.podIpv4CidrBlock">PodIpv4CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.podRange">PodRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfig">GoogleContainerNodePoolNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PodCidrOverprovisionConfig`<sup>Required</sup> <a name="PodCidrOverprovisionConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.podCidrOverprovisionConfig"></a>

```csharp
public GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference PodCidrOverprovisionConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference">GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference</a>

---

##### `CreatePodRangeInput`<sup>Optional</sup> <a name="CreatePodRangeInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.createPodRangeInput"></a>

```csharp
public object CreatePodRangeInput { get; }
```

- *Type:* object

---

##### `EnablePrivateNodesInput`<sup>Optional</sup> <a name="EnablePrivateNodesInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.enablePrivateNodesInput"></a>

```csharp
public object EnablePrivateNodesInput { get; }
```

- *Type:* object

---

##### `PodCidrOverprovisionConfigInput`<sup>Optional</sup> <a name="PodCidrOverprovisionConfigInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.podCidrOverprovisionConfigInput"></a>

```csharp
public GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig PodCidrOverprovisionConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig">GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig</a>

---

##### `PodIpv4CidrBlockInput`<sup>Optional</sup> <a name="PodIpv4CidrBlockInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.podIpv4CidrBlockInput"></a>

```csharp
public string PodIpv4CidrBlockInput { get; }
```

- *Type:* string

---

##### `PodRangeInput`<sup>Optional</sup> <a name="PodRangeInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.podRangeInput"></a>

```csharp
public string PodRangeInput { get; }
```

- *Type:* string

---

##### `CreatePodRange`<sup>Required</sup> <a name="CreatePodRange" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.createPodRange"></a>

```csharp
public object CreatePodRange { get; }
```

- *Type:* object

---

##### `EnablePrivateNodes`<sup>Required</sup> <a name="EnablePrivateNodes" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.enablePrivateNodes"></a>

```csharp
public object EnablePrivateNodes { get; }
```

- *Type:* object

---

##### `PodIpv4CidrBlock`<sup>Required</sup> <a name="PodIpv4CidrBlock" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.podIpv4CidrBlock"></a>

```csharp
public string PodIpv4CidrBlock { get; }
```

- *Type:* string

---

##### `PodRange`<sup>Required</sup> <a name="PodRange" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.podRange"></a>

```csharp
public string PodRange { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerNodePoolNetworkConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfig">GoogleContainerNodePoolNetworkConfig</a>

---


### GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference <a name="GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.property.disabledInput">DisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.property.disabled">Disabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig">GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.property.disabledInput"></a>

```csharp
public object DisabledInput { get; }
```

- *Type:* object

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.property.disabled"></a>

```csharp
public object Disabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig">GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig</a>

---


### GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference <a name="GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput">ThreadsPerCoreInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.threadsPerCore">ThreadsPerCore</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures">GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ThreadsPerCoreInput`<sup>Optional</sup> <a name="ThreadsPerCoreInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput"></a>

```csharp
public double ThreadsPerCoreInput { get; }
```

- *Type:* double

---

##### `ThreadsPerCore`<sup>Required</sup> <a name="ThreadsPerCore" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.threadsPerCore"></a>

```csharp
public double ThreadsPerCore { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures">GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures</a>

---


### GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference <a name="GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.property.localSsdCountInput">LocalSsdCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.property.localSsdCount">LocalSsdCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfig">GoogleContainerNodePoolNodeConfigEphemeralStorageConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocalSsdCountInput`<sup>Optional</sup> <a name="LocalSsdCountInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.property.localSsdCountInput"></a>

```csharp
public double LocalSsdCountInput { get; }
```

- *Type:* double

---

##### `LocalSsdCount`<sup>Required</sup> <a name="LocalSsdCount" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.property.localSsdCount"></a>

```csharp
public double LocalSsdCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerNodePoolNodeConfigEphemeralStorageConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfig">GoogleContainerNodePoolNodeConfigEphemeralStorageConfig</a>

---


### GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference <a name="GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.property.localSsdCountInput">LocalSsdCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.property.localSsdCount">LocalSsdCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig">GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocalSsdCountInput`<sup>Optional</sup> <a name="LocalSsdCountInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.property.localSsdCountInput"></a>

```csharp
public double LocalSsdCountInput { get; }
```

- *Type:* double

---

##### `LocalSsdCount`<sup>Required</sup> <a name="LocalSsdCount" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.property.localSsdCount"></a>

```csharp
public double LocalSsdCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig">GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig</a>

---


### GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference <a name="GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfig">GoogleContainerNodePoolNodeConfigGcfsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerNodePoolNodeConfigGcfsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfig">GoogleContainerNodePoolNodeConfigGcfsConfig</a>

---


### GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList <a name="GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.get"></a>

```csharp
private GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference <a name="GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.resetGpuSharingStrategy">ResetGpuSharingStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.resetMaxSharedClientsPerGpu">ResetMaxSharedClientsPerGpu</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGpuSharingStrategy` <a name="ResetGpuSharingStrategy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.resetGpuSharingStrategy"></a>

```csharp
private void ResetGpuSharingStrategy()
```

##### `ResetMaxSharedClientsPerGpu` <a name="ResetMaxSharedClientsPerGpu" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.resetMaxSharedClientsPerGpu"></a>

```csharp
private void ResetMaxSharedClientsPerGpu()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.gpuSharingStrategyInput">GpuSharingStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.maxSharedClientsPerGpuInput">MaxSharedClientsPerGpuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.gpuSharingStrategy">GpuSharingStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.maxSharedClientsPerGpu">MaxSharedClientsPerGpu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GpuSharingStrategyInput`<sup>Optional</sup> <a name="GpuSharingStrategyInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.gpuSharingStrategyInput"></a>

```csharp
public string GpuSharingStrategyInput { get; }
```

- *Type:* string

---

##### `MaxSharedClientsPerGpuInput`<sup>Optional</sup> <a name="MaxSharedClientsPerGpuInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.maxSharedClientsPerGpuInput"></a>

```csharp
public double MaxSharedClientsPerGpuInput { get; }
```

- *Type:* double

---

##### `GpuSharingStrategy`<sup>Required</sup> <a name="GpuSharingStrategy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.gpuSharingStrategy"></a>

```csharp
public string GpuSharingStrategy { get; }
```

- *Type:* string

---

##### `MaxSharedClientsPerGpu`<sup>Required</sup> <a name="MaxSharedClientsPerGpu" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.maxSharedClientsPerGpu"></a>

```csharp
public double MaxSharedClientsPerGpu { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleContainerNodePoolNodeConfigGuestAcceleratorList <a name="GoogleContainerNodePoolNodeConfigGuestAcceleratorList" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolNodeConfigGuestAcceleratorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.get"></a>

```csharp
private GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference <a name="GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.putGpuSharingConfig">PutGpuSharingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetCount">ResetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetGpuPartitionSize">ResetGpuPartitionSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetGpuSharingConfig">ResetGpuSharingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGpuSharingConfig` <a name="PutGpuSharingConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.putGpuSharingConfig"></a>

```csharp
private void PutGpuSharingConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.putGpuSharingConfig.parameter.value"></a>

- *Type:* object

---

##### `ResetCount` <a name="ResetCount" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetCount"></a>

```csharp
private void ResetCount()
```

##### `ResetGpuPartitionSize` <a name="ResetGpuPartitionSize" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetGpuPartitionSize"></a>

```csharp
private void ResetGpuPartitionSize()
```

##### `ResetGpuSharingConfig` <a name="ResetGpuSharingConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetGpuSharingConfig"></a>

```csharp
private void ResetGpuSharingConfig()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuSharingConfig">GpuSharingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList">GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuPartitionSizeInput">GpuPartitionSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuSharingConfigInput">GpuSharingConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuPartitionSize">GpuPartitionSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GpuSharingConfig`<sup>Required</sup> <a name="GpuSharingConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuSharingConfig"></a>

```csharp
public GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList GpuSharingConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList">GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList</a>

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `GpuPartitionSizeInput`<sup>Optional</sup> <a name="GpuPartitionSizeInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuPartitionSizeInput"></a>

```csharp
public string GpuPartitionSizeInput { get; }
```

- *Type:* string

---

##### `GpuSharingConfigInput`<sup>Optional</sup> <a name="GpuSharingConfigInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuSharingConfigInput"></a>

```csharp
public object GpuSharingConfigInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `GpuPartitionSize`<sup>Required</sup> <a name="GpuPartitionSize" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuPartitionSize"></a>

```csharp
public string GpuPartitionSize { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleContainerNodePoolNodeConfigGvnicOutputReference <a name="GoogleContainerNodePoolNodeConfigGvnicOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolNodeConfigGvnicOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnic">GoogleContainerNodePoolNodeConfigGvnic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerNodePoolNodeConfigGvnic InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnic">GoogleContainerNodePoolNodeConfigGvnic</a>

---


### GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference <a name="GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.resetCpuCfsQuota">ResetCpuCfsQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.resetCpuCfsQuotaPeriod">ResetCpuCfsQuotaPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.resetPodPidsLimit">ResetPodPidsLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpuCfsQuota` <a name="ResetCpuCfsQuota" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.resetCpuCfsQuota"></a>

```csharp
private void ResetCpuCfsQuota()
```

##### `ResetCpuCfsQuotaPeriod` <a name="ResetCpuCfsQuotaPeriod" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.resetCpuCfsQuotaPeriod"></a>

```csharp
private void ResetCpuCfsQuotaPeriod()
```

##### `ResetPodPidsLimit` <a name="ResetPodPidsLimit" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.resetPodPidsLimit"></a>

```csharp
private void ResetPodPidsLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuCfsQuotaInput">CpuCfsQuotaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuCfsQuotaPeriodInput">CpuCfsQuotaPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuManagerPolicyInput">CpuManagerPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.podPidsLimitInput">PodPidsLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuCfsQuota">CpuCfsQuota</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuCfsQuotaPeriod">CpuCfsQuotaPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuManagerPolicy">CpuManagerPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.podPidsLimit">PodPidsLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfig">GoogleContainerNodePoolNodeConfigKubeletConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpuCfsQuotaInput`<sup>Optional</sup> <a name="CpuCfsQuotaInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuCfsQuotaInput"></a>

```csharp
public object CpuCfsQuotaInput { get; }
```

- *Type:* object

---

##### `CpuCfsQuotaPeriodInput`<sup>Optional</sup> <a name="CpuCfsQuotaPeriodInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuCfsQuotaPeriodInput"></a>

```csharp
public string CpuCfsQuotaPeriodInput { get; }
```

- *Type:* string

---

##### `CpuManagerPolicyInput`<sup>Optional</sup> <a name="CpuManagerPolicyInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuManagerPolicyInput"></a>

```csharp
public string CpuManagerPolicyInput { get; }
```

- *Type:* string

---

##### `PodPidsLimitInput`<sup>Optional</sup> <a name="PodPidsLimitInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.podPidsLimitInput"></a>

```csharp
public double PodPidsLimitInput { get; }
```

- *Type:* double

---

##### `CpuCfsQuota`<sup>Required</sup> <a name="CpuCfsQuota" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuCfsQuota"></a>

```csharp
public object CpuCfsQuota { get; }
```

- *Type:* object

---

##### `CpuCfsQuotaPeriod`<sup>Required</sup> <a name="CpuCfsQuotaPeriod" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuCfsQuotaPeriod"></a>

```csharp
public string CpuCfsQuotaPeriod { get; }
```

- *Type:* string

---

##### `CpuManagerPolicy`<sup>Required</sup> <a name="CpuManagerPolicy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuManagerPolicy"></a>

```csharp
public string CpuManagerPolicy { get; }
```

- *Type:* string

---

##### `PodPidsLimit`<sup>Required</sup> <a name="PodPidsLimit" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.podPidsLimit"></a>

```csharp
public double PodPidsLimit { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerNodePoolNodeConfigKubeletConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfig">GoogleContainerNodePoolNodeConfigKubeletConfig</a>

---


### GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference <a name="GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.sysctlsInput">SysctlsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.sysctls">Sysctls</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfig">GoogleContainerNodePoolNodeConfigLinuxNodeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SysctlsInput`<sup>Optional</sup> <a name="SysctlsInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.sysctlsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SysctlsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Sysctls`<sup>Required</sup> <a name="Sysctls" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.sysctls"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Sysctls { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerNodePoolNodeConfigLinuxNodeConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfig">GoogleContainerNodePoolNodeConfigLinuxNodeConfig</a>

---


### GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference <a name="GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.localSsdCountInput">LocalSsdCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.localSsdCount">LocalSsdCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig">GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocalSsdCountInput`<sup>Optional</sup> <a name="LocalSsdCountInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.localSsdCountInput"></a>

```csharp
public double LocalSsdCountInput { get; }
```

- *Type:* double

---

##### `LocalSsdCount`<sup>Required</sup> <a name="LocalSsdCount" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.localSsdCount"></a>

```csharp
public double LocalSsdCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig">GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig</a>

---


### GoogleContainerNodePoolNodeConfigOutputReference <a name="GoogleContainerNodePoolNodeConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolNodeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putAdvancedMachineFeatures">PutAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putEphemeralStorageConfig">PutEphemeralStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putEphemeralStorageLocalSsdConfig">PutEphemeralStorageLocalSsdConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putGcfsConfig">PutGcfsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putGuestAccelerator">PutGuestAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putGvnic">PutGvnic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putKubeletConfig">PutKubeletConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putLinuxNodeConfig">PutLinuxNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putLocalNvmeSsdBlockConfig">PutLocalNvmeSsdBlockConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putReservationAffinity">PutReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putSandboxConfig">PutSandboxConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putShieldedInstanceConfig">PutShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putTaint">PutTaint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putWorkloadMetadataConfig">PutWorkloadMetadataConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetAdvancedMachineFeatures">ResetAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetBootDiskKmsKey">ResetBootDiskKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetDiskSizeGb">ResetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetDiskType">ResetDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetEphemeralStorageConfig">ResetEphemeralStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetEphemeralStorageLocalSsdConfig">ResetEphemeralStorageLocalSsdConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetGcfsConfig">ResetGcfsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetGuestAccelerator">ResetGuestAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetGvnic">ResetGvnic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetImageType">ResetImageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetKubeletConfig">ResetKubeletConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetLinuxNodeConfig">ResetLinuxNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetLocalNvmeSsdBlockConfig">ResetLocalNvmeSsdBlockConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetLocalSsdCount">ResetLocalSsdCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetLoggingVariant">ResetLoggingVariant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetMachineType">ResetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetMinCpuPlatform">ResetMinCpuPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetNodeGroup">ResetNodeGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetOauthScopes">ResetOauthScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetPreemptible">ResetPreemptible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetReservationAffinity">ResetReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetResourceLabels">ResetResourceLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetSandboxConfig">ResetSandboxConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetShieldedInstanceConfig">ResetShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetSpot">ResetSpot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetTaint">ResetTaint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetWorkloadMetadataConfig">ResetWorkloadMetadataConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdvancedMachineFeatures` <a name="PutAdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putAdvancedMachineFeatures"></a>

```csharp
private void PutAdvancedMachineFeatures(GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putAdvancedMachineFeatures.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures">GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures</a>

---

##### `PutEphemeralStorageConfig` <a name="PutEphemeralStorageConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putEphemeralStorageConfig"></a>

```csharp
private void PutEphemeralStorageConfig(GoogleContainerNodePoolNodeConfigEphemeralStorageConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putEphemeralStorageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfig">GoogleContainerNodePoolNodeConfigEphemeralStorageConfig</a>

---

##### `PutEphemeralStorageLocalSsdConfig` <a name="PutEphemeralStorageLocalSsdConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putEphemeralStorageLocalSsdConfig"></a>

```csharp
private void PutEphemeralStorageLocalSsdConfig(GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putEphemeralStorageLocalSsdConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig">GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig</a>

---

##### `PutGcfsConfig` <a name="PutGcfsConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putGcfsConfig"></a>

```csharp
private void PutGcfsConfig(GoogleContainerNodePoolNodeConfigGcfsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putGcfsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfig">GoogleContainerNodePoolNodeConfigGcfsConfig</a>

---

##### `PutGuestAccelerator` <a name="PutGuestAccelerator" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putGuestAccelerator"></a>

```csharp
private void PutGuestAccelerator(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putGuestAccelerator.parameter.value"></a>

- *Type:* object

---

##### `PutGvnic` <a name="PutGvnic" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putGvnic"></a>

```csharp
private void PutGvnic(GoogleContainerNodePoolNodeConfigGvnic Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putGvnic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnic">GoogleContainerNodePoolNodeConfigGvnic</a>

---

##### `PutKubeletConfig` <a name="PutKubeletConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putKubeletConfig"></a>

```csharp
private void PutKubeletConfig(GoogleContainerNodePoolNodeConfigKubeletConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putKubeletConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfig">GoogleContainerNodePoolNodeConfigKubeletConfig</a>

---

##### `PutLinuxNodeConfig` <a name="PutLinuxNodeConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putLinuxNodeConfig"></a>

```csharp
private void PutLinuxNodeConfig(GoogleContainerNodePoolNodeConfigLinuxNodeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putLinuxNodeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfig">GoogleContainerNodePoolNodeConfigLinuxNodeConfig</a>

---

##### `PutLocalNvmeSsdBlockConfig` <a name="PutLocalNvmeSsdBlockConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putLocalNvmeSsdBlockConfig"></a>

```csharp
private void PutLocalNvmeSsdBlockConfig(GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putLocalNvmeSsdBlockConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig">GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig</a>

---

##### `PutReservationAffinity` <a name="PutReservationAffinity" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putReservationAffinity"></a>

```csharp
private void PutReservationAffinity(GoogleContainerNodePoolNodeConfigReservationAffinity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putReservationAffinity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinity">GoogleContainerNodePoolNodeConfigReservationAffinity</a>

---

##### `PutSandboxConfig` <a name="PutSandboxConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putSandboxConfig"></a>

```csharp
private void PutSandboxConfig(GoogleContainerNodePoolNodeConfigSandboxConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putSandboxConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfig">GoogleContainerNodePoolNodeConfigSandboxConfig</a>

---

##### `PutShieldedInstanceConfig` <a name="PutShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putShieldedInstanceConfig"></a>

```csharp
private void PutShieldedInstanceConfig(GoogleContainerNodePoolNodeConfigShieldedInstanceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putShieldedInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfig">GoogleContainerNodePoolNodeConfigShieldedInstanceConfig</a>

---

##### `PutTaint` <a name="PutTaint" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putTaint"></a>

```csharp
private void PutTaint(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putTaint.parameter.value"></a>

- *Type:* object

---

##### `PutWorkloadMetadataConfig` <a name="PutWorkloadMetadataConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putWorkloadMetadataConfig"></a>

```csharp
private void PutWorkloadMetadataConfig(GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putWorkloadMetadataConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig">GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig</a>

---

##### `ResetAdvancedMachineFeatures` <a name="ResetAdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetAdvancedMachineFeatures"></a>

```csharp
private void ResetAdvancedMachineFeatures()
```

##### `ResetBootDiskKmsKey` <a name="ResetBootDiskKmsKey" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetBootDiskKmsKey"></a>

```csharp
private void ResetBootDiskKmsKey()
```

##### `ResetDiskSizeGb` <a name="ResetDiskSizeGb" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetDiskSizeGb"></a>

```csharp
private void ResetDiskSizeGb()
```

##### `ResetDiskType` <a name="ResetDiskType" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetDiskType"></a>

```csharp
private void ResetDiskType()
```

##### `ResetEphemeralStorageConfig` <a name="ResetEphemeralStorageConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetEphemeralStorageConfig"></a>

```csharp
private void ResetEphemeralStorageConfig()
```

##### `ResetEphemeralStorageLocalSsdConfig` <a name="ResetEphemeralStorageLocalSsdConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetEphemeralStorageLocalSsdConfig"></a>

```csharp
private void ResetEphemeralStorageLocalSsdConfig()
```

##### `ResetGcfsConfig` <a name="ResetGcfsConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetGcfsConfig"></a>

```csharp
private void ResetGcfsConfig()
```

##### `ResetGuestAccelerator` <a name="ResetGuestAccelerator" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetGuestAccelerator"></a>

```csharp
private void ResetGuestAccelerator()
```

##### `ResetGvnic` <a name="ResetGvnic" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetGvnic"></a>

```csharp
private void ResetGvnic()
```

##### `ResetImageType` <a name="ResetImageType" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetImageType"></a>

```csharp
private void ResetImageType()
```

##### `ResetKubeletConfig` <a name="ResetKubeletConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetKubeletConfig"></a>

```csharp
private void ResetKubeletConfig()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLinuxNodeConfig` <a name="ResetLinuxNodeConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetLinuxNodeConfig"></a>

```csharp
private void ResetLinuxNodeConfig()
```

##### `ResetLocalNvmeSsdBlockConfig` <a name="ResetLocalNvmeSsdBlockConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetLocalNvmeSsdBlockConfig"></a>

```csharp
private void ResetLocalNvmeSsdBlockConfig()
```

##### `ResetLocalSsdCount` <a name="ResetLocalSsdCount" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetLocalSsdCount"></a>

```csharp
private void ResetLocalSsdCount()
```

##### `ResetLoggingVariant` <a name="ResetLoggingVariant" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetLoggingVariant"></a>

```csharp
private void ResetLoggingVariant()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetMachineType"></a>

```csharp
private void ResetMachineType()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetMinCpuPlatform` <a name="ResetMinCpuPlatform" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetMinCpuPlatform"></a>

```csharp
private void ResetMinCpuPlatform()
```

##### `ResetNodeGroup` <a name="ResetNodeGroup" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetNodeGroup"></a>

```csharp
private void ResetNodeGroup()
```

##### `ResetOauthScopes` <a name="ResetOauthScopes" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetOauthScopes"></a>

```csharp
private void ResetOauthScopes()
```

##### `ResetPreemptible` <a name="ResetPreemptible" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetPreemptible"></a>

```csharp
private void ResetPreemptible()
```

##### `ResetReservationAffinity` <a name="ResetReservationAffinity" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetReservationAffinity"></a>

```csharp
private void ResetReservationAffinity()
```

##### `ResetResourceLabels` <a name="ResetResourceLabels" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetResourceLabels"></a>

```csharp
private void ResetResourceLabels()
```

##### `ResetSandboxConfig` <a name="ResetSandboxConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetSandboxConfig"></a>

```csharp
private void ResetSandboxConfig()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetServiceAccount"></a>

```csharp
private void ResetServiceAccount()
```

##### `ResetShieldedInstanceConfig` <a name="ResetShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetShieldedInstanceConfig"></a>

```csharp
private void ResetShieldedInstanceConfig()
```

##### `ResetSpot` <a name="ResetSpot" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetSpot"></a>

```csharp
private void ResetSpot()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTaint` <a name="ResetTaint" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetTaint"></a>

```csharp
private void ResetTaint()
```

##### `ResetWorkloadMetadataConfig` <a name="ResetWorkloadMetadataConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetWorkloadMetadataConfig"></a>

```csharp
private void ResetWorkloadMetadataConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.advancedMachineFeatures">AdvancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference">GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.ephemeralStorageConfig">EphemeralStorageConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference">GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.ephemeralStorageLocalSsdConfig">EphemeralStorageLocalSsdConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference">GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.gcfsConfig">GcfsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference">GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.guestAccelerator">GuestAccelerator</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList">GoogleContainerNodePoolNodeConfigGuestAcceleratorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.gvnic">Gvnic</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference">GoogleContainerNodePoolNodeConfigGvnicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.kubeletConfig">KubeletConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference">GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.linuxNodeConfig">LinuxNodeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference">GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.localNvmeSsdBlockConfig">LocalNvmeSsdBlockConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference">GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.reservationAffinity">ReservationAffinity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference">GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.sandboxConfig">SandboxConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference">GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.shieldedInstanceConfig">ShieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference">GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.taint">Taint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList">GoogleContainerNodePoolNodeConfigTaintList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.workloadMetadataConfig">WorkloadMetadataConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference">GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.advancedMachineFeaturesInput">AdvancedMachineFeaturesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures">GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.bootDiskKmsKeyInput">BootDiskKmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.diskTypeInput">DiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.ephemeralStorageConfigInput">EphemeralStorageConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfig">GoogleContainerNodePoolNodeConfigEphemeralStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.ephemeralStorageLocalSsdConfigInput">EphemeralStorageLocalSsdConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig">GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.gcfsConfigInput">GcfsConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfig">GoogleContainerNodePoolNodeConfigGcfsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.guestAcceleratorInput">GuestAcceleratorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.gvnicInput">GvnicInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnic">GoogleContainerNodePoolNodeConfigGvnic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.imageTypeInput">ImageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.kubeletConfigInput">KubeletConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfig">GoogleContainerNodePoolNodeConfigKubeletConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.linuxNodeConfigInput">LinuxNodeConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfig">GoogleContainerNodePoolNodeConfigLinuxNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.localNvmeSsdBlockConfigInput">LocalNvmeSsdBlockConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig">GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.localSsdCountInput">LocalSsdCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.loggingVariantInput">LoggingVariantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.minCpuPlatformInput">MinCpuPlatformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.nodeGroupInput">NodeGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.oauthScopesInput">OauthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.preemptibleInput">PreemptibleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.reservationAffinityInput">ReservationAffinityInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinity">GoogleContainerNodePoolNodeConfigReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.resourceLabelsInput">ResourceLabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.sandboxConfigInput">SandboxConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfig">GoogleContainerNodePoolNodeConfigSandboxConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.shieldedInstanceConfigInput">ShieldedInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfig">GoogleContainerNodePoolNodeConfigShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.spotInput">SpotInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.taintInput">TaintInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.workloadMetadataConfigInput">WorkloadMetadataConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig">GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.bootDiskKmsKey">BootDiskKmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.diskType">DiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.imageType">ImageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.localSsdCount">LocalSsdCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.loggingVariant">LoggingVariant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.machineType">MachineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.minCpuPlatform">MinCpuPlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.nodeGroup">NodeGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.oauthScopes">OauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.preemptible">Preemptible</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.resourceLabels">ResourceLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.spot">Spot</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig">GoogleContainerNodePoolNodeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdvancedMachineFeatures`<sup>Required</sup> <a name="AdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.advancedMachineFeatures"></a>

```csharp
public GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference AdvancedMachineFeatures { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference">GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference</a>

---

##### `EphemeralStorageConfig`<sup>Required</sup> <a name="EphemeralStorageConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.ephemeralStorageConfig"></a>

```csharp
public GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference EphemeralStorageConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference">GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference</a>

---

##### `EphemeralStorageLocalSsdConfig`<sup>Required</sup> <a name="EphemeralStorageLocalSsdConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.ephemeralStorageLocalSsdConfig"></a>

```csharp
public GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference EphemeralStorageLocalSsdConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference">GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference</a>

---

##### `GcfsConfig`<sup>Required</sup> <a name="GcfsConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.gcfsConfig"></a>

```csharp
public GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference GcfsConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference">GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference</a>

---

##### `GuestAccelerator`<sup>Required</sup> <a name="GuestAccelerator" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.guestAccelerator"></a>

```csharp
public GoogleContainerNodePoolNodeConfigGuestAcceleratorList GuestAccelerator { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList">GoogleContainerNodePoolNodeConfigGuestAcceleratorList</a>

---

##### `Gvnic`<sup>Required</sup> <a name="Gvnic" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.gvnic"></a>

```csharp
public GoogleContainerNodePoolNodeConfigGvnicOutputReference Gvnic { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference">GoogleContainerNodePoolNodeConfigGvnicOutputReference</a>

---

##### `KubeletConfig`<sup>Required</sup> <a name="KubeletConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.kubeletConfig"></a>

```csharp
public GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference KubeletConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference">GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference</a>

---

##### `LinuxNodeConfig`<sup>Required</sup> <a name="LinuxNodeConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.linuxNodeConfig"></a>

```csharp
public GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference LinuxNodeConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference">GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference</a>

---

##### `LocalNvmeSsdBlockConfig`<sup>Required</sup> <a name="LocalNvmeSsdBlockConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.localNvmeSsdBlockConfig"></a>

```csharp
public GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference LocalNvmeSsdBlockConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference">GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference</a>

---

##### `ReservationAffinity`<sup>Required</sup> <a name="ReservationAffinity" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.reservationAffinity"></a>

```csharp
public GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference ReservationAffinity { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference">GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference</a>

---

##### `SandboxConfig`<sup>Required</sup> <a name="SandboxConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.sandboxConfig"></a>

```csharp
public GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference SandboxConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference">GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference</a>

---

##### `ShieldedInstanceConfig`<sup>Required</sup> <a name="ShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.shieldedInstanceConfig"></a>

```csharp
public GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference ShieldedInstanceConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference">GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference</a>

---

##### `Taint`<sup>Required</sup> <a name="Taint" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.taint"></a>

```csharp
public GoogleContainerNodePoolNodeConfigTaintList Taint { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList">GoogleContainerNodePoolNodeConfigTaintList</a>

---

##### `WorkloadMetadataConfig`<sup>Required</sup> <a name="WorkloadMetadataConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.workloadMetadataConfig"></a>

```csharp
public GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference WorkloadMetadataConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference">GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference</a>

---

##### `AdvancedMachineFeaturesInput`<sup>Optional</sup> <a name="AdvancedMachineFeaturesInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.advancedMachineFeaturesInput"></a>

```csharp
public GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures AdvancedMachineFeaturesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures">GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures</a>

---

##### `BootDiskKmsKeyInput`<sup>Optional</sup> <a name="BootDiskKmsKeyInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.bootDiskKmsKeyInput"></a>

```csharp
public string BootDiskKmsKeyInput { get; }
```

- *Type:* string

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.diskSizeGbInput"></a>

```csharp
public double DiskSizeGbInput { get; }
```

- *Type:* double

---

##### `DiskTypeInput`<sup>Optional</sup> <a name="DiskTypeInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.diskTypeInput"></a>

```csharp
public string DiskTypeInput { get; }
```

- *Type:* string

---

##### `EphemeralStorageConfigInput`<sup>Optional</sup> <a name="EphemeralStorageConfigInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.ephemeralStorageConfigInput"></a>

```csharp
public GoogleContainerNodePoolNodeConfigEphemeralStorageConfig EphemeralStorageConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfig">GoogleContainerNodePoolNodeConfigEphemeralStorageConfig</a>

---

##### `EphemeralStorageLocalSsdConfigInput`<sup>Optional</sup> <a name="EphemeralStorageLocalSsdConfigInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.ephemeralStorageLocalSsdConfigInput"></a>

```csharp
public GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig EphemeralStorageLocalSsdConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig">GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig</a>

---

##### `GcfsConfigInput`<sup>Optional</sup> <a name="GcfsConfigInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.gcfsConfigInput"></a>

```csharp
public GoogleContainerNodePoolNodeConfigGcfsConfig GcfsConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfig">GoogleContainerNodePoolNodeConfigGcfsConfig</a>

---

##### `GuestAcceleratorInput`<sup>Optional</sup> <a name="GuestAcceleratorInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.guestAcceleratorInput"></a>

```csharp
public object GuestAcceleratorInput { get; }
```

- *Type:* object

---

##### `GvnicInput`<sup>Optional</sup> <a name="GvnicInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.gvnicInput"></a>

```csharp
public GoogleContainerNodePoolNodeConfigGvnic GvnicInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnic">GoogleContainerNodePoolNodeConfigGvnic</a>

---

##### `ImageTypeInput`<sup>Optional</sup> <a name="ImageTypeInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.imageTypeInput"></a>

```csharp
public string ImageTypeInput { get; }
```

- *Type:* string

---

##### `KubeletConfigInput`<sup>Optional</sup> <a name="KubeletConfigInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.kubeletConfigInput"></a>

```csharp
public GoogleContainerNodePoolNodeConfigKubeletConfig KubeletConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfig">GoogleContainerNodePoolNodeConfigKubeletConfig</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LinuxNodeConfigInput`<sup>Optional</sup> <a name="LinuxNodeConfigInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.linuxNodeConfigInput"></a>

```csharp
public GoogleContainerNodePoolNodeConfigLinuxNodeConfig LinuxNodeConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfig">GoogleContainerNodePoolNodeConfigLinuxNodeConfig</a>

---

##### `LocalNvmeSsdBlockConfigInput`<sup>Optional</sup> <a name="LocalNvmeSsdBlockConfigInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.localNvmeSsdBlockConfigInput"></a>

```csharp
public GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig LocalNvmeSsdBlockConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig">GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig</a>

---

##### `LocalSsdCountInput`<sup>Optional</sup> <a name="LocalSsdCountInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.localSsdCountInput"></a>

```csharp
public double LocalSsdCountInput { get; }
```

- *Type:* double

---

##### `LoggingVariantInput`<sup>Optional</sup> <a name="LoggingVariantInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.loggingVariantInput"></a>

```csharp
public string LoggingVariantInput { get; }
```

- *Type:* string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.machineTypeInput"></a>

```csharp
public string MachineTypeInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MinCpuPlatformInput`<sup>Optional</sup> <a name="MinCpuPlatformInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.minCpuPlatformInput"></a>

```csharp
public string MinCpuPlatformInput { get; }
```

- *Type:* string

---

##### `NodeGroupInput`<sup>Optional</sup> <a name="NodeGroupInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.nodeGroupInput"></a>

```csharp
public string NodeGroupInput { get; }
```

- *Type:* string

---

##### `OauthScopesInput`<sup>Optional</sup> <a name="OauthScopesInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.oauthScopesInput"></a>

```csharp
public string[] OauthScopesInput { get; }
```

- *Type:* string[]

---

##### `PreemptibleInput`<sup>Optional</sup> <a name="PreemptibleInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.preemptibleInput"></a>

```csharp
public object PreemptibleInput { get; }
```

- *Type:* object

---

##### `ReservationAffinityInput`<sup>Optional</sup> <a name="ReservationAffinityInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.reservationAffinityInput"></a>

```csharp
public GoogleContainerNodePoolNodeConfigReservationAffinity ReservationAffinityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinity">GoogleContainerNodePoolNodeConfigReservationAffinity</a>

---

##### `ResourceLabelsInput`<sup>Optional</sup> <a name="ResourceLabelsInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.resourceLabelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceLabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SandboxConfigInput`<sup>Optional</sup> <a name="SandboxConfigInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.sandboxConfigInput"></a>

```csharp
public GoogleContainerNodePoolNodeConfigSandboxConfig SandboxConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfig">GoogleContainerNodePoolNodeConfigSandboxConfig</a>

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `ShieldedInstanceConfigInput`<sup>Optional</sup> <a name="ShieldedInstanceConfigInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.shieldedInstanceConfigInput"></a>

```csharp
public GoogleContainerNodePoolNodeConfigShieldedInstanceConfig ShieldedInstanceConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfig">GoogleContainerNodePoolNodeConfigShieldedInstanceConfig</a>

---

##### `SpotInput`<sup>Optional</sup> <a name="SpotInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.spotInput"></a>

```csharp
public object SpotInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `TaintInput`<sup>Optional</sup> <a name="TaintInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.taintInput"></a>

```csharp
public object TaintInput { get; }
```

- *Type:* object

---

##### `WorkloadMetadataConfigInput`<sup>Optional</sup> <a name="WorkloadMetadataConfigInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.workloadMetadataConfigInput"></a>

```csharp
public GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig WorkloadMetadataConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig">GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig</a>

---

##### `BootDiskKmsKey`<sup>Required</sup> <a name="BootDiskKmsKey" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.bootDiskKmsKey"></a>

```csharp
public string BootDiskKmsKey { get; }
```

- *Type:* string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.diskSizeGb"></a>

```csharp
public double DiskSizeGb { get; }
```

- *Type:* double

---

##### `DiskType`<sup>Required</sup> <a name="DiskType" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.diskType"></a>

```csharp
public string DiskType { get; }
```

- *Type:* string

---

##### `ImageType`<sup>Required</sup> <a name="ImageType" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.imageType"></a>

```csharp
public string ImageType { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocalSsdCount`<sup>Required</sup> <a name="LocalSsdCount" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.localSsdCount"></a>

```csharp
public double LocalSsdCount { get; }
```

- *Type:* double

---

##### `LoggingVariant`<sup>Required</sup> <a name="LoggingVariant" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.loggingVariant"></a>

```csharp
public string LoggingVariant { get; }
```

- *Type:* string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.machineType"></a>

```csharp
public string MachineType { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MinCpuPlatform`<sup>Required</sup> <a name="MinCpuPlatform" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.minCpuPlatform"></a>

```csharp
public string MinCpuPlatform { get; }
```

- *Type:* string

---

##### `NodeGroup`<sup>Required</sup> <a name="NodeGroup" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.nodeGroup"></a>

```csharp
public string NodeGroup { get; }
```

- *Type:* string

---

##### `OauthScopes`<sup>Required</sup> <a name="OauthScopes" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.oauthScopes"></a>

```csharp
public string[] OauthScopes { get; }
```

- *Type:* string[]

---

##### `Preemptible`<sup>Required</sup> <a name="Preemptible" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.preemptible"></a>

```csharp
public object Preemptible { get; }
```

- *Type:* object

---

##### `ResourceLabels`<sup>Required</sup> <a name="ResourceLabels" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.resourceLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceLabels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `Spot`<sup>Required</sup> <a name="Spot" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.spot"></a>

```csharp
public object Spot { get; }
```

- *Type:* object

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerNodePoolNodeConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig">GoogleContainerNodePoolNodeConfig</a>

---


### GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference <a name="GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.property.consumeReservationTypeInput">ConsumeReservationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.property.consumeReservationType">ConsumeReservationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinity">GoogleContainerNodePoolNodeConfigReservationAffinity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConsumeReservationTypeInput`<sup>Optional</sup> <a name="ConsumeReservationTypeInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.property.consumeReservationTypeInput"></a>

```csharp
public string ConsumeReservationTypeInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `ConsumeReservationType`<sup>Required</sup> <a name="ConsumeReservationType" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.property.consumeReservationType"></a>

```csharp
public string ConsumeReservationType { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerNodePoolNodeConfigReservationAffinity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinity">GoogleContainerNodePoolNodeConfigReservationAffinity</a>

---


### GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference <a name="GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.property.sandboxTypeInput">SandboxTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.property.sandboxType">SandboxType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfig">GoogleContainerNodePoolNodeConfigSandboxConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SandboxTypeInput`<sup>Optional</sup> <a name="SandboxTypeInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.property.sandboxTypeInput"></a>

```csharp
public string SandboxTypeInput { get; }
```

- *Type:* string

---

##### `SandboxType`<sup>Required</sup> <a name="SandboxType" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.property.sandboxType"></a>

```csharp
public string SandboxType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerNodePoolNodeConfigSandboxConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfig">GoogleContainerNodePoolNodeConfigSandboxConfig</a>

---


### GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference <a name="GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">ResetEnableIntegrityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.resetEnableSecureBoot">ResetEnableSecureBoot</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableIntegrityMonitoring` <a name="ResetEnableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```csharp
private void ResetEnableIntegrityMonitoring()
```

##### `ResetEnableSecureBoot` <a name="ResetEnableSecureBoot" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```csharp
private void ResetEnableSecureBoot()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">EnableIntegrityMonitoringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.enableSecureBootInput">EnableSecureBootInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">EnableIntegrityMonitoring</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.enableSecureBoot">EnableSecureBoot</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfig">GoogleContainerNodePoolNodeConfigShieldedInstanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableIntegrityMonitoringInput`<sup>Optional</sup> <a name="EnableIntegrityMonitoringInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```csharp
public object EnableIntegrityMonitoringInput { get; }
```

- *Type:* object

---

##### `EnableSecureBootInput`<sup>Optional</sup> <a name="EnableSecureBootInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```csharp
public object EnableSecureBootInput { get; }
```

- *Type:* object

---

##### `EnableIntegrityMonitoring`<sup>Required</sup> <a name="EnableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```csharp
public object EnableIntegrityMonitoring { get; }
```

- *Type:* object

---

##### `EnableSecureBoot`<sup>Required</sup> <a name="EnableSecureBoot" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```csharp
public object EnableSecureBoot { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerNodePoolNodeConfigShieldedInstanceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfig">GoogleContainerNodePoolNodeConfigShieldedInstanceConfig</a>

---


### GoogleContainerNodePoolNodeConfigTaintList <a name="GoogleContainerNodePoolNodeConfigTaintList" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolNodeConfigTaintList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.get"></a>

```csharp
private GoogleContainerNodePoolNodeConfigTaintOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleContainerNodePoolNodeConfigTaintOutputReference <a name="GoogleContainerNodePoolNodeConfigTaintOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolNodeConfigTaintOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.resetEffect">ResetEffect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEffect` <a name="ResetEffect" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.resetEffect"></a>

```csharp
private void ResetEffect()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.property.effectInput">EffectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.property.effect">Effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EffectInput`<sup>Optional</sup> <a name="EffectInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.property.effectInput"></a>

```csharp
public string EffectInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.property.effect"></a>

```csharp
public string Effect { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference <a name="GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig">GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig">GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig</a>

---


### GoogleContainerNodePoolPlacementPolicyOutputReference <a name="GoogleContainerNodePoolPlacementPolicyOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolPlacementPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicy">GoogleContainerNodePoolPlacementPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerNodePoolPlacementPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicy">GoogleContainerNodePoolPlacementPolicy</a>

---


### GoogleContainerNodePoolTimeoutsOutputReference <a name="GoogleContainerNodePoolTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference <a name="GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.putStandardRolloutPolicy">PutStandardRolloutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.resetNodePoolSoakDuration">ResetNodePoolSoakDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStandardRolloutPolicy` <a name="PutStandardRolloutPolicy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.putStandardRolloutPolicy"></a>

```csharp
private void PutStandardRolloutPolicy(GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.putStandardRolloutPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy">GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy</a>

---

##### `ResetNodePoolSoakDuration` <a name="ResetNodePoolSoakDuration" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.resetNodePoolSoakDuration"></a>

```csharp
private void ResetNodePoolSoakDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.standardRolloutPolicy">StandardRolloutPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference">GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.nodePoolSoakDurationInput">NodePoolSoakDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.standardRolloutPolicyInput">StandardRolloutPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy">GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.nodePoolSoakDuration">NodePoolSoakDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings">GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StandardRolloutPolicy`<sup>Required</sup> <a name="StandardRolloutPolicy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.standardRolloutPolicy"></a>

```csharp
public GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference StandardRolloutPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference">GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference</a>

---

##### `NodePoolSoakDurationInput`<sup>Optional</sup> <a name="NodePoolSoakDurationInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.nodePoolSoakDurationInput"></a>

```csharp
public string NodePoolSoakDurationInput { get; }
```

- *Type:* string

---

##### `StandardRolloutPolicyInput`<sup>Optional</sup> <a name="StandardRolloutPolicyInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.standardRolloutPolicyInput"></a>

```csharp
public GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy StandardRolloutPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy">GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy</a>

---

##### `NodePoolSoakDuration`<sup>Required</sup> <a name="NodePoolSoakDuration" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.nodePoolSoakDuration"></a>

```csharp
public string NodePoolSoakDuration { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings">GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings</a>

---


### GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference <a name="GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resetBatchNodeCount">ResetBatchNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resetBatchPercentage">ResetBatchPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resetBatchSoakDuration">ResetBatchSoakDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBatchNodeCount` <a name="ResetBatchNodeCount" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resetBatchNodeCount"></a>

```csharp
private void ResetBatchNodeCount()
```

##### `ResetBatchPercentage` <a name="ResetBatchPercentage" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resetBatchPercentage"></a>

```csharp
private void ResetBatchPercentage()
```

##### `ResetBatchSoakDuration` <a name="ResetBatchSoakDuration" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resetBatchSoakDuration"></a>

```csharp
private void ResetBatchSoakDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchNodeCountInput">BatchNodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchPercentageInput">BatchPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchSoakDurationInput">BatchSoakDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchNodeCount">BatchNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchPercentage">BatchPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchSoakDuration">BatchSoakDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy">GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BatchNodeCountInput`<sup>Optional</sup> <a name="BatchNodeCountInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchNodeCountInput"></a>

```csharp
public double BatchNodeCountInput { get; }
```

- *Type:* double

---

##### `BatchPercentageInput`<sup>Optional</sup> <a name="BatchPercentageInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchPercentageInput"></a>

```csharp
public double BatchPercentageInput { get; }
```

- *Type:* double

---

##### `BatchSoakDurationInput`<sup>Optional</sup> <a name="BatchSoakDurationInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchSoakDurationInput"></a>

```csharp
public string BatchSoakDurationInput { get; }
```

- *Type:* string

---

##### `BatchNodeCount`<sup>Required</sup> <a name="BatchNodeCount" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchNodeCount"></a>

```csharp
public double BatchNodeCount { get; }
```

- *Type:* double

---

##### `BatchPercentage`<sup>Required</sup> <a name="BatchPercentage" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchPercentage"></a>

```csharp
public double BatchPercentage { get; }
```

- *Type:* double

---

##### `BatchSoakDuration`<sup>Required</sup> <a name="BatchSoakDuration" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchSoakDuration"></a>

```csharp
public string BatchSoakDuration { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy">GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy</a>

---


### GoogleContainerNodePoolUpgradeSettingsOutputReference <a name="GoogleContainerNodePoolUpgradeSettingsOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerNodePoolUpgradeSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.putBlueGreenSettings">PutBlueGreenSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.resetBlueGreenSettings">ResetBlueGreenSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.resetMaxSurge">ResetMaxSurge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.resetMaxUnavailable">ResetMaxUnavailable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.resetStrategy">ResetStrategy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBlueGreenSettings` <a name="PutBlueGreenSettings" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.putBlueGreenSettings"></a>

```csharp
private void PutBlueGreenSettings(GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.putBlueGreenSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings">GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings</a>

---

##### `ResetBlueGreenSettings` <a name="ResetBlueGreenSettings" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.resetBlueGreenSettings"></a>

```csharp
private void ResetBlueGreenSettings()
```

##### `ResetMaxSurge` <a name="ResetMaxSurge" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.resetMaxSurge"></a>

```csharp
private void ResetMaxSurge()
```

##### `ResetMaxUnavailable` <a name="ResetMaxUnavailable" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.resetMaxUnavailable"></a>

```csharp
private void ResetMaxUnavailable()
```

##### `ResetStrategy` <a name="ResetStrategy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.resetStrategy"></a>

```csharp
private void ResetStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.blueGreenSettings">BlueGreenSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference">GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.blueGreenSettingsInput">BlueGreenSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings">GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.maxSurgeInput">MaxSurgeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.maxUnavailableInput">MaxUnavailableInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.strategyInput">StrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.maxSurge">MaxSurge</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.maxUnavailable">MaxUnavailable</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.strategy">Strategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettings">GoogleContainerNodePoolUpgradeSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlueGreenSettings`<sup>Required</sup> <a name="BlueGreenSettings" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.blueGreenSettings"></a>

```csharp
public GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference BlueGreenSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference">GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference</a>

---

##### `BlueGreenSettingsInput`<sup>Optional</sup> <a name="BlueGreenSettingsInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.blueGreenSettingsInput"></a>

```csharp
public GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings BlueGreenSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings">GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings</a>

---

##### `MaxSurgeInput`<sup>Optional</sup> <a name="MaxSurgeInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.maxSurgeInput"></a>

```csharp
public double MaxSurgeInput { get; }
```

- *Type:* double

---

##### `MaxUnavailableInput`<sup>Optional</sup> <a name="MaxUnavailableInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.maxUnavailableInput"></a>

```csharp
public double MaxUnavailableInput { get; }
```

- *Type:* double

---

##### `StrategyInput`<sup>Optional</sup> <a name="StrategyInput" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.strategyInput"></a>

```csharp
public string StrategyInput { get; }
```

- *Type:* string

---

##### `MaxSurge`<sup>Required</sup> <a name="MaxSurge" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.maxSurge"></a>

```csharp
public double MaxSurge { get; }
```

- *Type:* double

---

##### `MaxUnavailable`<sup>Required</sup> <a name="MaxUnavailable" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.maxUnavailable"></a>

```csharp
public double MaxUnavailable { get; }
```

- *Type:* double

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.strategy"></a>

```csharp
public string Strategy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerNodePoolUpgradeSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettings">GoogleContainerNodePoolUpgradeSettings</a>

---



