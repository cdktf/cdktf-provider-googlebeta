# `googleNetworkServicesEndpointPolicy` Submodule <a name="`googleNetworkServicesEndpointPolicy` Submodule" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesEndpointPolicy <a name="GoogleNetworkServicesEndpointPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_endpoint_policy google_network_services_endpoint_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesEndpointPolicy(Construct Scope, string Id, GoogleNetworkServicesEndpointPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig">GoogleNetworkServicesEndpointPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig">GoogleNetworkServicesEndpointPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.putEndpointMatcher">PutEndpointMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.putTrafficPortSelector">PutTrafficPortSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetAuthorizationPolicy">ResetAuthorizationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetClientTlsPolicy">ResetClientTlsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetServerTlsPolicy">ResetServerTlsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetTrafficPortSelector">ResetTrafficPortSelector</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEndpointMatcher` <a name="PutEndpointMatcher" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.putEndpointMatcher"></a>

```csharp
private void PutEndpointMatcher(GoogleNetworkServicesEndpointPolicyEndpointMatcher Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.putEndpointMatcher.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcher">GoogleNetworkServicesEndpointPolicyEndpointMatcher</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleNetworkServicesEndpointPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeouts">GoogleNetworkServicesEndpointPolicyTimeouts</a>

---

##### `PutTrafficPortSelector` <a name="PutTrafficPortSelector" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.putTrafficPortSelector"></a>

```csharp
private void PutTrafficPortSelector(GoogleNetworkServicesEndpointPolicyTrafficPortSelector Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.putTrafficPortSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelector">GoogleNetworkServicesEndpointPolicyTrafficPortSelector</a>

---

##### `ResetAuthorizationPolicy` <a name="ResetAuthorizationPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetAuthorizationPolicy"></a>

```csharp
private void ResetAuthorizationPolicy()
```

##### `ResetClientTlsPolicy` <a name="ResetClientTlsPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetClientTlsPolicy"></a>

```csharp
private void ResetClientTlsPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetServerTlsPolicy` <a name="ResetServerTlsPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetServerTlsPolicy"></a>

```csharp
private void ResetServerTlsPolicy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTrafficPortSelector` <a name="ResetTrafficPortSelector" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetTrafficPortSelector"></a>

```csharp
private void ResetTrafficPortSelector()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkServicesEndpointPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkServicesEndpointPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkServicesEndpointPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkServicesEndpointPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkServicesEndpointPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleNetworkServicesEndpointPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkServicesEndpointPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkServicesEndpointPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_endpoint_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesEndpointPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.endpointMatcher">EndpointMatcher</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference">GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference">GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.trafficPortSelector">TrafficPortSelector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference">GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.authorizationPolicyInput">AuthorizationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.clientTlsPolicyInput">ClientTlsPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.endpointMatcherInput">EndpointMatcherInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcher">GoogleNetworkServicesEndpointPolicyEndpointMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.serverTlsPolicyInput">ServerTlsPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.trafficPortSelectorInput">TrafficPortSelectorInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelector">GoogleNetworkServicesEndpointPolicyTrafficPortSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.authorizationPolicy">AuthorizationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.clientTlsPolicy">ClientTlsPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.serverTlsPolicy">ServerTlsPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EndpointMatcher`<sup>Required</sup> <a name="EndpointMatcher" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.endpointMatcher"></a>

```csharp
public GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference EndpointMatcher { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference">GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.timeouts"></a>

```csharp
public GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference">GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference</a>

---

##### `TrafficPortSelector`<sup>Required</sup> <a name="TrafficPortSelector" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.trafficPortSelector"></a>

```csharp
public GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference TrafficPortSelector { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference">GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AuthorizationPolicyInput`<sup>Optional</sup> <a name="AuthorizationPolicyInput" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.authorizationPolicyInput"></a>

```csharp
public string AuthorizationPolicyInput { get; }
```

- *Type:* string

---

##### `ClientTlsPolicyInput`<sup>Optional</sup> <a name="ClientTlsPolicyInput" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.clientTlsPolicyInput"></a>

```csharp
public string ClientTlsPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EndpointMatcherInput`<sup>Optional</sup> <a name="EndpointMatcherInput" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.endpointMatcherInput"></a>

```csharp
public GoogleNetworkServicesEndpointPolicyEndpointMatcher EndpointMatcherInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcher">GoogleNetworkServicesEndpointPolicyEndpointMatcher</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ServerTlsPolicyInput`<sup>Optional</sup> <a name="ServerTlsPolicyInput" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.serverTlsPolicyInput"></a>

```csharp
public string ServerTlsPolicyInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TrafficPortSelectorInput`<sup>Optional</sup> <a name="TrafficPortSelectorInput" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.trafficPortSelectorInput"></a>

```csharp
public GoogleNetworkServicesEndpointPolicyTrafficPortSelector TrafficPortSelectorInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelector">GoogleNetworkServicesEndpointPolicyTrafficPortSelector</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AuthorizationPolicy`<sup>Required</sup> <a name="AuthorizationPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.authorizationPolicy"></a>

```csharp
public string AuthorizationPolicy { get; }
```

- *Type:* string

---

##### `ClientTlsPolicy`<sup>Required</sup> <a name="ClientTlsPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.clientTlsPolicy"></a>

```csharp
public string ClientTlsPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ServerTlsPolicy`<sup>Required</sup> <a name="ServerTlsPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.serverTlsPolicy"></a>

```csharp
public string ServerTlsPolicy { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesEndpointPolicyConfig <a name="GoogleNetworkServicesEndpointPolicyConfig" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesEndpointPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    GoogleNetworkServicesEndpointPolicyEndpointMatcher EndpointMatcher,
    string Name,
    string Type,
    string AuthorizationPolicy = null,
    string ClientTlsPolicy = null,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    string ServerTlsPolicy = null,
    GoogleNetworkServicesEndpointPolicyTimeouts Timeouts = null,
    GoogleNetworkServicesEndpointPolicyTrafficPortSelector TrafficPortSelector = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.endpointMatcher">EndpointMatcher</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcher">GoogleNetworkServicesEndpointPolicyEndpointMatcher</a></code> | endpoint_matcher block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.name">Name</a></code> | <code>string</code> | Name of the EndpointPolicy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.type">Type</a></code> | <code>string</code> | The type of endpoint policy. This is primarily used to validate the configuration. Possible values: ["SIDECAR_PROXY", "GRPC_SERVER"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.authorizationPolicy">AuthorizationPolicy</a></code> | <code>string</code> | This field specifies the URL of AuthorizationPolicy resource that applies authorization policies to the inbound traffic at the matched endpoints. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.clientTlsPolicy">ClientTlsPolicy</a></code> | <code>string</code> | A URL referring to a ClientTlsPolicy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.description">Description</a></code> | <code>string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_endpoint_policy#id GoogleNetworkServicesEndpointPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Set of label tags associated with the TcpRoute resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_endpoint_policy#project GoogleNetworkServicesEndpointPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.serverTlsPolicy">ServerTlsPolicy</a></code> | <code>string</code> | A URL referring to ServerTlsPolicy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeouts">GoogleNetworkServicesEndpointPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.trafficPortSelector">TrafficPortSelector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelector">GoogleNetworkServicesEndpointPolicyTrafficPortSelector</a></code> | traffic_port_selector block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EndpointMatcher`<sup>Required</sup> <a name="EndpointMatcher" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.endpointMatcher"></a>

```csharp
public GoogleNetworkServicesEndpointPolicyEndpointMatcher EndpointMatcher { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcher">GoogleNetworkServicesEndpointPolicyEndpointMatcher</a>

endpoint_matcher block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_endpoint_policy#endpoint_matcher GoogleNetworkServicesEndpointPolicy#endpoint_matcher}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the EndpointPolicy resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_endpoint_policy#name GoogleNetworkServicesEndpointPolicy#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of endpoint policy. This is primarily used to validate the configuration. Possible values: ["SIDECAR_PROXY", "GRPC_SERVER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_endpoint_policy#type GoogleNetworkServicesEndpointPolicy#type}

---

##### `AuthorizationPolicy`<sup>Optional</sup> <a name="AuthorizationPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.authorizationPolicy"></a>

```csharp
public string AuthorizationPolicy { get; set; }
```

- *Type:* string

This field specifies the URL of AuthorizationPolicy resource that applies authorization policies to the inbound traffic at the matched endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_endpoint_policy#authorization_policy GoogleNetworkServicesEndpointPolicy#authorization_policy}

---

##### `ClientTlsPolicy`<sup>Optional</sup> <a name="ClientTlsPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.clientTlsPolicy"></a>

```csharp
public string ClientTlsPolicy { get; set; }
```

- *Type:* string

A URL referring to a ClientTlsPolicy resource.

ClientTlsPolicy can be set to specify the authentication for traffic from the proxy to the actual endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_endpoint_policy#client_tls_policy GoogleNetworkServicesEndpointPolicy#client_tls_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_endpoint_policy#description GoogleNetworkServicesEndpointPolicy#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_endpoint_policy#id GoogleNetworkServicesEndpointPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Set of label tags associated with the TcpRoute resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_endpoint_policy#labels GoogleNetworkServicesEndpointPolicy#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_endpoint_policy#project GoogleNetworkServicesEndpointPolicy#project}.

---

##### `ServerTlsPolicy`<sup>Optional</sup> <a name="ServerTlsPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.serverTlsPolicy"></a>

```csharp
public string ServerTlsPolicy { get; set; }
```

- *Type:* string

A URL referring to ServerTlsPolicy resource.

ServerTlsPolicy is used to determine the authentication policy to be applied to terminate the inbound traffic at the identified backends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_endpoint_policy#server_tls_policy GoogleNetworkServicesEndpointPolicy#server_tls_policy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.timeouts"></a>

```csharp
public GoogleNetworkServicesEndpointPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeouts">GoogleNetworkServicesEndpointPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_endpoint_policy#timeouts GoogleNetworkServicesEndpointPolicy#timeouts}

---

##### `TrafficPortSelector`<sup>Optional</sup> <a name="TrafficPortSelector" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.trafficPortSelector"></a>

```csharp
public GoogleNetworkServicesEndpointPolicyTrafficPortSelector TrafficPortSelector { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelector">GoogleNetworkServicesEndpointPolicyTrafficPortSelector</a>

traffic_port_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_endpoint_policy#traffic_port_selector GoogleNetworkServicesEndpointPolicy#traffic_port_selector}

---

### GoogleNetworkServicesEndpointPolicyEndpointMatcher <a name="GoogleNetworkServicesEndpointPolicyEndpointMatcher" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcher"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcher.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesEndpointPolicyEndpointMatcher {
    GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher MetadataLabelMatcher
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcher.property.metadataLabelMatcher">MetadataLabelMatcher</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher">GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher</a></code> | metadata_label_matcher block. |

---

##### `MetadataLabelMatcher`<sup>Required</sup> <a name="MetadataLabelMatcher" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcher.property.metadataLabelMatcher"></a>

```csharp
public GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher MetadataLabelMatcher { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher">GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher</a>

metadata_label_matcher block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_endpoint_policy#metadata_label_matcher GoogleNetworkServicesEndpointPolicy#metadata_label_matcher}

---

### GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher <a name="GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher {
    string MetadataLabelMatchCriteria,
    object MetadataLabels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher.property.metadataLabelMatchCriteria">MetadataLabelMatchCriteria</a></code> | <code>string</code> | Specifies how matching should be done. Possible values: ["MATCH_ANY", "MATCH_ALL"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher.property.metadataLabels">MetadataLabels</a></code> | <code>object</code> | metadata_labels block. |

---

##### `MetadataLabelMatchCriteria`<sup>Required</sup> <a name="MetadataLabelMatchCriteria" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher.property.metadataLabelMatchCriteria"></a>

```csharp
public string MetadataLabelMatchCriteria { get; set; }
```

- *Type:* string

Specifies how matching should be done. Possible values: ["MATCH_ANY", "MATCH_ALL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_endpoint_policy#metadata_label_match_criteria GoogleNetworkServicesEndpointPolicy#metadata_label_match_criteria}

---

##### `MetadataLabels`<sup>Optional</sup> <a name="MetadataLabels" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher.property.metadataLabels"></a>

```csharp
public object MetadataLabels { get; set; }
```

- *Type:* object

metadata_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_endpoint_policy#metadata_labels GoogleNetworkServicesEndpointPolicy#metadata_labels}

---

### GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels <a name="GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels {
    string LabelName,
    string LabelValue
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels.property.labelName">LabelName</a></code> | <code>string</code> | Required. Label name presented as key in xDS Node Metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels.property.labelValue">LabelValue</a></code> | <code>string</code> | Required. Label value presented as value corresponding to the above key, in xDS Node Metadata. |

---

##### `LabelName`<sup>Required</sup> <a name="LabelName" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels.property.labelName"></a>

```csharp
public string LabelName { get; set; }
```

- *Type:* string

Required. Label name presented as key in xDS Node Metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_endpoint_policy#label_name GoogleNetworkServicesEndpointPolicy#label_name}

---

##### `LabelValue`<sup>Required</sup> <a name="LabelValue" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels.property.labelValue"></a>

```csharp
public string LabelValue { get; set; }
```

- *Type:* string

Required. Label value presented as value corresponding to the above key, in xDS Node Metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_endpoint_policy#label_value GoogleNetworkServicesEndpointPolicy#label_value}

---

### GoogleNetworkServicesEndpointPolicyTimeouts <a name="GoogleNetworkServicesEndpointPolicyTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesEndpointPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_endpoint_policy#create GoogleNetworkServicesEndpointPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_endpoint_policy#delete GoogleNetworkServicesEndpointPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_endpoint_policy#update GoogleNetworkServicesEndpointPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_endpoint_policy#create GoogleNetworkServicesEndpointPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_endpoint_policy#delete GoogleNetworkServicesEndpointPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_endpoint_policy#update GoogleNetworkServicesEndpointPolicy#update}.

---

### GoogleNetworkServicesEndpointPolicyTrafficPortSelector <a name="GoogleNetworkServicesEndpointPolicyTrafficPortSelector" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesEndpointPolicyTrafficPortSelector {
    string[] Ports
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelector.property.ports">Ports</a></code> | <code>string[]</code> | List of ports. |

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelector.property.ports"></a>

```csharp
public string[] Ports { get; set; }
```

- *Type:* string[]

List of ports.

Can be port numbers or port range (example, [80-90] specifies all ports from 80 to 90, including 80 and 90) or named ports or * to specify all ports. If the list is empty, all ports are selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_endpoint_policy#ports GoogleNetworkServicesEndpointPolicy#ports}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList <a name="GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.get"></a>

```csharp
private GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference <a name="GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.labelNameInput">LabelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.labelValueInput">LabelValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.labelName">LabelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.labelValue">LabelValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LabelNameInput`<sup>Optional</sup> <a name="LabelNameInput" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.labelNameInput"></a>

```csharp
public string LabelNameInput { get; }
```

- *Type:* string

---

##### `LabelValueInput`<sup>Optional</sup> <a name="LabelValueInput" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.labelValueInput"></a>

```csharp
public string LabelValueInput { get; }
```

- *Type:* string

---

##### `LabelName`<sup>Required</sup> <a name="LabelName" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.labelName"></a>

```csharp
public string LabelName { get; }
```

- *Type:* string

---

##### `LabelValue`<sup>Required</sup> <a name="LabelValue" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.labelValue"></a>

```csharp
public string LabelValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference <a name="GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.putMetadataLabels">PutMetadataLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.resetMetadataLabels">ResetMetadataLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetadataLabels` <a name="PutMetadataLabels" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.putMetadataLabels"></a>

```csharp
private void PutMetadataLabels(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.putMetadataLabels.parameter.value"></a>

- *Type:* object

---

##### `ResetMetadataLabels` <a name="ResetMetadataLabels" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.resetMetadataLabels"></a>

```csharp
private void ResetMetadataLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.metadataLabels">MetadataLabels</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList">GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.metadataLabelMatchCriteriaInput">MetadataLabelMatchCriteriaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.metadataLabelsInput">MetadataLabelsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.metadataLabelMatchCriteria">MetadataLabelMatchCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher">GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetadataLabels`<sup>Required</sup> <a name="MetadataLabels" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.metadataLabels"></a>

```csharp
public GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList MetadataLabels { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList">GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList</a>

---

##### `MetadataLabelMatchCriteriaInput`<sup>Optional</sup> <a name="MetadataLabelMatchCriteriaInput" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.metadataLabelMatchCriteriaInput"></a>

```csharp
public string MetadataLabelMatchCriteriaInput { get; }
```

- *Type:* string

---

##### `MetadataLabelsInput`<sup>Optional</sup> <a name="MetadataLabelsInput" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.metadataLabelsInput"></a>

```csharp
public object MetadataLabelsInput { get; }
```

- *Type:* object

---

##### `MetadataLabelMatchCriteria`<sup>Required</sup> <a name="MetadataLabelMatchCriteria" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.metadataLabelMatchCriteria"></a>

```csharp
public string MetadataLabelMatchCriteria { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher">GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher</a>

---


### GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference <a name="GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.putMetadataLabelMatcher">PutMetadataLabelMatcher</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetadataLabelMatcher` <a name="PutMetadataLabelMatcher" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.putMetadataLabelMatcher"></a>

```csharp
private void PutMetadataLabelMatcher(GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.putMetadataLabelMatcher.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher">GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.property.metadataLabelMatcher">MetadataLabelMatcher</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference">GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.property.metadataLabelMatcherInput">MetadataLabelMatcherInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher">GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcher">GoogleNetworkServicesEndpointPolicyEndpointMatcher</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetadataLabelMatcher`<sup>Required</sup> <a name="MetadataLabelMatcher" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.property.metadataLabelMatcher"></a>

```csharp
public GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference MetadataLabelMatcher { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference">GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference</a>

---

##### `MetadataLabelMatcherInput`<sup>Optional</sup> <a name="MetadataLabelMatcherInput" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.property.metadataLabelMatcherInput"></a>

```csharp
public GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher MetadataLabelMatcherInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher">GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkServicesEndpointPolicyEndpointMatcher InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcher">GoogleNetworkServicesEndpointPolicyEndpointMatcher</a>

---


### GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference <a name="GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference <a name="GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.property.portsInput">PortsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.property.ports">Ports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelector">GoogleNetworkServicesEndpointPolicyTrafficPortSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.property.portsInput"></a>

```csharp
public string[] PortsInput { get; }
```

- *Type:* string[]

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.property.ports"></a>

```csharp
public string[] Ports { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkServicesEndpointPolicyTrafficPortSelector InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelector">GoogleNetworkServicesEndpointPolicyTrafficPortSelector</a>

---



