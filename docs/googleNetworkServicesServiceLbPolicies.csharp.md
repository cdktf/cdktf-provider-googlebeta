# `googleNetworkServicesServiceLbPolicies` Submodule <a name="`googleNetworkServicesServiceLbPolicies` Submodule" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesServiceLbPolicies <a name="GoogleNetworkServicesServiceLbPolicies" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_services_service_lb_policies google_network_services_service_lb_policies}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesServiceLbPolicies(Construct Scope, string Id, GoogleNetworkServicesServiceLbPoliciesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig">GoogleNetworkServicesServiceLbPoliciesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig">GoogleNetworkServicesServiceLbPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.putAutoCapacityDrain">PutAutoCapacityDrain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.putFailoverConfig">PutFailoverConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetAutoCapacityDrain">ResetAutoCapacityDrain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetFailoverConfig">ResetFailoverConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetLoadBalancingAlgorithm">ResetLoadBalancingAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutoCapacityDrain` <a name="PutAutoCapacityDrain" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.putAutoCapacityDrain"></a>

```csharp
private void PutAutoCapacityDrain(GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.putAutoCapacityDrain.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain">GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain</a>

---

##### `PutFailoverConfig` <a name="PutFailoverConfig" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.putFailoverConfig"></a>

```csharp
private void PutFailoverConfig(GoogleNetworkServicesServiceLbPoliciesFailoverConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.putFailoverConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfig">GoogleNetworkServicesServiceLbPoliciesFailoverConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleNetworkServicesServiceLbPoliciesTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts">GoogleNetworkServicesServiceLbPoliciesTimeouts</a>

---

##### `ResetAutoCapacityDrain` <a name="ResetAutoCapacityDrain" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetAutoCapacityDrain"></a>

```csharp
private void ResetAutoCapacityDrain()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFailoverConfig` <a name="ResetFailoverConfig" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetFailoverConfig"></a>

```csharp
private void ResetFailoverConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLoadBalancingAlgorithm` <a name="ResetLoadBalancingAlgorithm" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetLoadBalancingAlgorithm"></a>

```csharp
private void ResetLoadBalancingAlgorithm()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkServicesServiceLbPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkServicesServiceLbPolicies.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkServicesServiceLbPolicies.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkServicesServiceLbPolicies.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkServicesServiceLbPolicies.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleNetworkServicesServiceLbPolicies resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkServicesServiceLbPolicies to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkServicesServiceLbPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_services_service_lb_policies#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesServiceLbPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.autoCapacityDrain">AutoCapacityDrain</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference">GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.failoverConfig">FailoverConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference">GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference">GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.autoCapacityDrainInput">AutoCapacityDrainInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain">GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.failoverConfigInput">FailoverConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfig">GoogleNetworkServicesServiceLbPoliciesFailoverConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.loadBalancingAlgorithmInput">LoadBalancingAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.loadBalancingAlgorithm">LoadBalancingAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AutoCapacityDrain`<sup>Required</sup> <a name="AutoCapacityDrain" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.autoCapacityDrain"></a>

```csharp
public GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference AutoCapacityDrain { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference">GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `FailoverConfig`<sup>Required</sup> <a name="FailoverConfig" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.failoverConfig"></a>

```csharp
public GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference FailoverConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference">GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.timeouts"></a>

```csharp
public GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference">GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AutoCapacityDrainInput`<sup>Optional</sup> <a name="AutoCapacityDrainInput" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.autoCapacityDrainInput"></a>

```csharp
public GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain AutoCapacityDrainInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain">GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FailoverConfigInput`<sup>Optional</sup> <a name="FailoverConfigInput" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.failoverConfigInput"></a>

```csharp
public GoogleNetworkServicesServiceLbPoliciesFailoverConfig FailoverConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfig">GoogleNetworkServicesServiceLbPoliciesFailoverConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LoadBalancingAlgorithmInput`<sup>Optional</sup> <a name="LoadBalancingAlgorithmInput" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.loadBalancingAlgorithmInput"></a>

```csharp
public string LoadBalancingAlgorithmInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LoadBalancingAlgorithm`<sup>Required</sup> <a name="LoadBalancingAlgorithm" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.loadBalancingAlgorithm"></a>

```csharp
public string LoadBalancingAlgorithm { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPolicies.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain <a name="GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain {
    object Enable = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain.property.enable">Enable</a></code> | <code>object</code> | Optional. |

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain.property.enable"></a>

```csharp
public object Enable { get; set; }
```

- *Type:* object

Optional.

If set to 'True', an unhealthy MIG/NEG will be set as drained. - An MIG/NEG is considered unhealthy if less than 25% of the instances/endpoints in the MIG/NEG are healthy. - This option will never result in draining more than 50% of the configured IGs/NEGs for the Backend Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_services_service_lb_policies#enable GoogleNetworkServicesServiceLbPolicies#enable}

---

### GoogleNetworkServicesServiceLbPoliciesConfig <a name="GoogleNetworkServicesServiceLbPoliciesConfig" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesServiceLbPoliciesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain AutoCapacityDrain = null,
    string Description = null,
    GoogleNetworkServicesServiceLbPoliciesFailoverConfig FailoverConfig = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string LoadBalancingAlgorithm = null,
    string Project = null,
    GoogleNetworkServicesServiceLbPoliciesTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.location">Location</a></code> | <code>string</code> | The location of the service lb policy. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.name">Name</a></code> | <code>string</code> | Name of the ServiceLbPolicy resource. It matches pattern 'projects/{project}/locations/{location}/serviceLbPolicies/{service_lb_policy_name}'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.autoCapacityDrain">AutoCapacityDrain</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain">GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain</a></code> | auto_capacity_drain block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.description">Description</a></code> | <code>string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.failoverConfig">FailoverConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfig">GoogleNetworkServicesServiceLbPoliciesFailoverConfig</a></code> | failover_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_services_service_lb_policies#id GoogleNetworkServicesServiceLbPolicies#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Set of label tags associated with the ServiceLbPolicy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.loadBalancingAlgorithm">LoadBalancingAlgorithm</a></code> | <code>string</code> | The type of load balancing algorithm to be used. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_services_service_lb_policies#project GoogleNetworkServicesServiceLbPolicies#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts">GoogleNetworkServicesServiceLbPoliciesTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the service lb policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_services_service_lb_policies#location GoogleNetworkServicesServiceLbPolicies#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the ServiceLbPolicy resource. It matches pattern 'projects/{project}/locations/{location}/serviceLbPolicies/{service_lb_policy_name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_services_service_lb_policies#name GoogleNetworkServicesServiceLbPolicies#name}

---

##### `AutoCapacityDrain`<sup>Optional</sup> <a name="AutoCapacityDrain" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.autoCapacityDrain"></a>

```csharp
public GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain AutoCapacityDrain { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain">GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain</a>

auto_capacity_drain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_services_service_lb_policies#auto_capacity_drain GoogleNetworkServicesServiceLbPolicies#auto_capacity_drain}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_services_service_lb_policies#description GoogleNetworkServicesServiceLbPolicies#description}

---

##### `FailoverConfig`<sup>Optional</sup> <a name="FailoverConfig" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.failoverConfig"></a>

```csharp
public GoogleNetworkServicesServiceLbPoliciesFailoverConfig FailoverConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfig">GoogleNetworkServicesServiceLbPoliciesFailoverConfig</a>

failover_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_services_service_lb_policies#failover_config GoogleNetworkServicesServiceLbPolicies#failover_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_services_service_lb_policies#id GoogleNetworkServicesServiceLbPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Set of label tags associated with the ServiceLbPolicy resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_services_service_lb_policies#labels GoogleNetworkServicesServiceLbPolicies#labels}

---

##### `LoadBalancingAlgorithm`<sup>Optional</sup> <a name="LoadBalancingAlgorithm" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.loadBalancingAlgorithm"></a>

```csharp
public string LoadBalancingAlgorithm { get; set; }
```

- *Type:* string

The type of load balancing algorithm to be used.

The default behavior is WATERFALL_BY_REGION. Possible values: ["SPRAY_TO_REGION", "SPRAY_TO_WORLD", "WATERFALL_BY_REGION", "WATERFALL_BY_ZONE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_services_service_lb_policies#load_balancing_algorithm GoogleNetworkServicesServiceLbPolicies#load_balancing_algorithm}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_services_service_lb_policies#project GoogleNetworkServicesServiceLbPolicies#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesConfig.property.timeouts"></a>

```csharp
public GoogleNetworkServicesServiceLbPoliciesTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts">GoogleNetworkServicesServiceLbPoliciesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_services_service_lb_policies#timeouts GoogleNetworkServicesServiceLbPolicies#timeouts}

---

### GoogleNetworkServicesServiceLbPoliciesFailoverConfig <a name="GoogleNetworkServicesServiceLbPoliciesFailoverConfig" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesServiceLbPoliciesFailoverConfig {
    double FailoverHealthThreshold
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfig.property.failoverHealthThreshold">FailoverHealthThreshold</a></code> | <code>double</code> | Optional. |

---

##### `FailoverHealthThreshold`<sup>Required</sup> <a name="FailoverHealthThreshold" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfig.property.failoverHealthThreshold"></a>

```csharp
public double FailoverHealthThreshold { get; set; }
```

- *Type:* double

Optional.

The percentage threshold that a load balancer will begin to send traffic to failover backends. If the percentage of endpoints in a MIG/NEG is smaller than this value, traffic would be sent to failover backends if possible. This field should be set to a value between 1 and 99. The default value is 50 for Global external HTTP(S) load balancer (classic) and Proxyless service mesh, and 70 for others.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_services_service_lb_policies#failover_health_threshold GoogleNetworkServicesServiceLbPolicies#failover_health_threshold}

---

### GoogleNetworkServicesServiceLbPoliciesTimeouts <a name="GoogleNetworkServicesServiceLbPoliciesTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesServiceLbPoliciesTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_services_service_lb_policies#create GoogleNetworkServicesServiceLbPolicies#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_services_service_lb_policies#delete GoogleNetworkServicesServiceLbPolicies#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_services_service_lb_policies#update GoogleNetworkServicesServiceLbPolicies#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_services_service_lb_policies#create GoogleNetworkServicesServiceLbPolicies#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_services_service_lb_policies#delete GoogleNetworkServicesServiceLbPolicies#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_services_service_lb_policies#update GoogleNetworkServicesServiceLbPolicies#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference <a name="GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.resetEnable">ResetEnable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnable` <a name="ResetEnable" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.resetEnable"></a>

```csharp
private void ResetEnable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.enableInput">EnableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.enable">Enable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain">GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.enableInput"></a>

```csharp
public object EnableInput { get; }
```

- *Type:* object

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.enable"></a>

```csharp
public object Enable { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain">GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain</a>

---


### GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference <a name="GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.failoverHealthThresholdInput">FailoverHealthThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.failoverHealthThreshold">FailoverHealthThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfig">GoogleNetworkServicesServiceLbPoliciesFailoverConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FailoverHealthThresholdInput`<sup>Optional</sup> <a name="FailoverHealthThresholdInput" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.failoverHealthThresholdInput"></a>

```csharp
public double FailoverHealthThresholdInput { get; }
```

- *Type:* double

---

##### `FailoverHealthThreshold`<sup>Required</sup> <a name="FailoverHealthThreshold" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.failoverHealthThreshold"></a>

```csharp
public double FailoverHealthThreshold { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkServicesServiceLbPoliciesFailoverConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesFailoverConfig">GoogleNetworkServicesServiceLbPoliciesFailoverConfig</a>

---


### GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference <a name="GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesServiceLbPolicies.GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



